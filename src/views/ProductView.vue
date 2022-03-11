<template>
    <!-- "container"容器(會有點向內縮)，bootstrap 的起手方式 -->
    <div class="container">
      <div class="card" style="width: 64rem;">
      <div class="row">
        <div class="col-6">
          <img :src="product.imageUrl" class="card-img-top" alt="">
        </div>
        <div class="col-6">
          <div class="card-body">
            <span class="badge bg-primary rounded-pill">{{ product.category }}</span>
            <h5 class="card-title">{{product.title }}</h5>
            <p class="card-text">商品描述：{{ product.description }}</p>
            <p>商品內容：{{ product.content }}</p>
            <del class="card-text">原價: $ {{ product.origin_price }} 元
            </del>
            <p class="card-text">售價: $ {{ product.price }} 元</p>
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
      product: {}
    }
  },
  methods: {
    getProduct () {
      // $router 方法、$route(物件)取值
      const { id } = this.$route.params // 從 this.$route.params 中取出 id
      // 使用 process 接 .env 的驗證資料
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
