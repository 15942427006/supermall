<template>
  <div>
    <div>网络封装</div>
    <button @click='wlqx'>网络请求1</button>
    <button @click='wlqx2'>网络请求2</button>

    <button @click='abzuo'>网络请求3</button>
 </div>
 
</template>

<script>
import {request} from '../../request/requestputong.js'
//数据请求js代码的时候要加上{}
//请求组件的时候不用写{}
//请求插件的时候不用写{}
import {requestandorid} from '../../request/requestandorid.js'

export default {
  name: 'Home',
  methods:{
    wlqx(){
      request({
        url:'/home/multidata'
      }).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
        console.log('你正在打印的是一个错误的信息')
      })
    },
    wlqx2(){
      request({
        url:'/category'
      }).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    },
    abzuo(){
      requestandorid({
        url:'/category'
      }).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    }
  }
 }

</script>

<style>

</style>
