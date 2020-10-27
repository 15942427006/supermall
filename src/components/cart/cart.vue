<template>
  <div>
    <div>我是购物车{{$store.state.counter}}</div>
    <div>大于20岁的人是：<li v-for='(item,index) in $store.getters.more20'>{{item.name}}</li></div>   
    <div>从getter中拿出来值{{$store.getters.nazhi}}</div>

    <div>{{$store.state.counter}}</div>
    <button @click="addcount(5)">+5</button>
    <button @click="addcount(10)">+10</button>
     <button @click="addstudent()">addstudent</button>
 </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return {
    
    }
  },
  computed:{
  
  },
  methods:{
    addcount(counts){
      this.$store.commit('addationbutton',counts)
    },
    addstudent(){
      const stu = {id:'06',name:'llssll',age:36}
      this.$store.commit('addasss',stu)
    }
  }
 }
</script>

<style>
li{ list-style: none; border-bottom: 1px solid red;}
</style>
