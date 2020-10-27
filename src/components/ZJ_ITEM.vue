<template>
    <div class="tabbar-item" @click="itmeclick">
      <div v-if="!isActive"><slot name="itemicon"></slot></div>
      <div v-else><slot name="itemiconactive"></slot></div>
      <div :style='activeStyle'><slot name="itemtext"></slot></div>
    </div>
</template>
<script>
export default {
  name: 'tabbaritem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'green'
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  data(){
    return{
    }
  },
  methods:{
    itmeclick(){
      this.$router.replace(this.path)
    }
  }
}
</script>
<style>
.tabbar-item{ height: 49px; text-align: center; background:#f2f2f2; flex: 1; }
.tabbar-item .active{ color: red;}
.tabbar-item img{ width: 25px; margin: 5px 0 0 0; }
.tabbar-item div{ margin: -5px 0 0 0;font-size: 14px;}

</style>
