<template>
  <div>
    <router-view></router-view>
    <zjtabar>
      <zjitem path="/home" activeColor='#ff0000'>
        <img slot="itemicon" src="@/assets/img/home.svg" />
        <img slot="itemiconactive" src="@/assets/img/active.svg" />
        <div slot="itemtext">首页</div>
      </zjitem>
      <zjitem path="/category" activeColor='#00ff00'>
        <img slot="itemicon" src="../assets/img/fenlei.svg" />
        <img slot="itemiconactive" src="../assets/img/fenlei2.svg" />
        <div slot="itemtext">分类</div>
      </zjitem>
      <zjitem path="/cart">
        <img slot="itemicon" src="../assets/img/cart.svg" />
        <img slot="itemiconactive" src="../assets/img/active.svg" />
        <div slot="itemtext">购物车</div>
      </zjitem>
      <zjitem path="/profile">
        <img slot="itemicon" src="../assets/img/mine.svg" /> 
        <img slot="itemiconactive" src="../assets/img/active.svg" />
        <div slot="itemtext">我的</div>
      </zjitem>
    </zjtabar>
  </div>
</template>

<script>
//想使用组件就得导入
import zj_tabar from './ZJ_TABAR.vue'
import zj_item from './ZJ_ITEM.vue'

export default {
  name: 'App',
  components: {
    'zjtabar': zj_tabar,
    'zjitem':zj_item
  }
}
</script>

<style>
  @import"../assets/css/base.css";

</style>
