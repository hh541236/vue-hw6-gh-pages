<template>
  <nav class="navbar navbar-expand-lg navbar navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">前台</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- <router-link to=""> 切換路由用，可以吃到 class 樣式 -->
            <router-link class="nav-link" to="/">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">購物車</router-link>
          </li>
        </ul>
      </div>
      <button type="button" class="btn btn-primary">
        結帳
        <span class="badge rounded-pill bg-danger">{{cartData.carts.length}}</span>
      </button>
    </div>
  </nav>
</template>
<script>
import emitter from '@/libs/emitter'

export default {
  data () {
    return {
      // 需先預設 carts 的陣列才能使用 length 方法，畫面在一開始渲染之前會先抓data內的資料，因為抓不到所以會噴錯
      cartData: {
        carts: []
      }
    }
  },
  methods: {
    getCart () {
      this.$http.get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cartData = res.data.data // 將傳回的資料存入
        })
    }
  },
  mounted () {
    this.getCart()
    // 建立 'get-cart' 監聽(當它被觸發時會再重新取得品項)
    emitter.on('get-cart', () => {
      this.getCart()
    })
  }
}
</script>
