<template>
    <h2>產品列表</h2>
    <!-- "container"容器(會有點向內縮)，bootstrap 的起手方式 -->
    <div class="container">
      <!-- 開始使用格線系統。用 row 決定內層的數量。-->
      <!-- RWD 前:行動版1格 後:桌面版4個 。 "row-cols-lg-4" 每一列有4個
      g 為 "gutters"，增加垂直水平間距，使用 1~5 -->
      <div class="row row-col-1 row-cols-lg-4 g-3" >
        <!-- ，bootstrap5 技巧，內層不定義寬度 -->
        <!-- 格線型式定義寬度使用，在這使用 v-for 讓每個 card 元件都吃到格線效果 -->
        <div class="col" v-for="product in products" :key="product.id">
          <!-- 卡片元件 卡片下設定高度就會等高-->
          <div class="card h-100">
            <img :src="product.imageUrl" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <!-- 使用 router-link 連結到單一產品的內容 -->
              <router-link class="btn btn-primary" :to="`/product/${product.id}`">產品內容</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProducts () {
      // 使用 process 接 .env 的驗證資料
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
