<template>
  <!-- 使用元件呼叫 -->
  <FrontNavbar></FrontNavbar>
  <router-view></router-view>
  <!-- 下層為 ProductsView -->
</template>
<script>
// 匯入外部元件的方式載入，"@"為 src 資料夾路徑
import FrontNavbar from '@/components/FrontNavbar.vue'
export default {
  components: {
    FrontNavbar
  }
}
</script>
