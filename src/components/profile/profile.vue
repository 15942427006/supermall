<template>
 <div>我的
   <img :src="dasd" />
   {{$store.state.student}}
   <div class="mmm">{{$store.getters.more20}}</div>
 </div>
</template>

<script>
import axios from 'axios'



export default {
  name: 'Home',
  data(){
    return {
      dasd:''
    }
  },
  created(){
    //faction的作用域的问题 要换成箭头函数作用域无懈可击呀
    axios({url:'http://123.207.32.32:8000/home/multidata'}).then((request)=>{
      this.dasd=request.data.data.banner.list[0].image
    }
      //console.log(request.data.data.banner.list[0].image)
      //
    )
    

  }
 }
</script>

<style>
.mmm{ width: 200px; height: 200px; float: left; background: #ff0000;}
</style>
