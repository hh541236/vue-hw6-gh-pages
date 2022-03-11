<template>
  <div class="container">
    <h2>購物車</h2>
    <table class="table align-middle">
      <thead>
        <tr>
          <th>圖片</th>
          <th>商品名稱</th>
          <th>價格</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td style="width: 200px">
            <div
              :style="{
                backgroundImage: `url(${product.imageUrl})`,
              }"
              style="
                height: 100px;
                background-size: cover;
                background-position: center;
              "
            ></div>
          </td>
          <td>
            {{ product.title }}
          </td>
          <td>
            <div class="h5" v-if="product.price === product.origin_price">
              {{ product.price }} 元
            </div>
            <div v-else>
              <del class="h6">原價 {{ product.origin_price }} 元</del>
              <div class="h5">現在只要 {{ product.price }} 元</div>
            </div>
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <!-- disabled 點擊後暫時不能點 ，等到 AJAX 讀取完後才能點擊-> 當被點擊的 id 與產品 id 一致時套用 -->
              <button
                type="button"
                @click="openProductModal(product.id)"
                class="btn btn-outline-secondary"
                :disabled="isLoadingItem === product.id"
              >
                查看更多
              </button>
              <!-- disabled 點擊後暫時不能點 ，等到 AJAX 讀取完後才能點擊-> 當被點擊的 id 與產品 id 一致時套用 -->
              <button
                type="button"
                class="btn btn-outline-danger"
                @click="addToCart(product.id)"
                :disabled="isLoadingItem === product.id"
              >
                <!-- 加入 BS 讀取效果、加入判斷條件 -->
                <span
                  class="spinner-border spinner-border-sm"
                  v-show="isLoadingItem === product.id"
                ></span>
                加到購物車
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import emitter from '@/libs/emitter'

export default {
  data () {
    return {
      cartData: {},
      products: [],
      isLoadingItem: ''
    }
  },
  methods: {
    getProducts () {
      this.$http.get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`).then((res) => {
        this.products = res.data.products // 抓取傳回的資料
      })
    },
    addToCart (id, qty = 1) {
      // 加入購物車須帶入兩個參數(id, 數量)，加入參數預設子，當沒有傳入值時，數量預設 = 1
      const data = {
        // 建構資料格式(在api文獻中)
        product_id: id,
        qty
      }
      this.isLoadingItem = id
      this.$http
        .post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`, { data }) // 把資料格式帶到後面
        .then((res) => {
          this.isLoadingItem = '' // 清空重置
          emitter.emit('get-cart')
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
