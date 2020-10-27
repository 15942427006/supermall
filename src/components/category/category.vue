<template>
 <div>我是分类{{$store.state.counter}}
    <button @click="jiafa">+++</button>
    <div class="yibu"></div>
    <div>
      <button @click="yibuaction">异步请求通过action传参</button>


    </div>

    <div>{{$store.state.moduleA.name}}</div>
    <!--这个是演示如何在state的模块a 当中直接饮用name-->
    <button @click="changemodule">修改模块中的state</button>



    <div>{{$store.getters.fullname}}</div>
    <!--直接在vuex里边拿到getters的计算属性值 去用-->
    <div>{{$store.getters.fullname2}}</div>
    <!--直接在vuex里边拿 当getter里边的内容想要另一个getters 里边的内容时候  这个讲的是拼接-->
    <div class="yibu"></div>
   <div>{{$store.getters.fullname3}}</div> 


<div class="yibu"></div>
 <button @click="asyncbuton">异步请求模块中的action</button>
   
 </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      
    }
  },
  methods:{
    jiafa(){
     this.$store.commit('addation')
    },
    yibuaction(){
      //this.$store.commit('yibuaction')
      //这个时候就不能直接到mutations里边了要经过action所以
      const zdyprams={name:'litao',object:{},num:12,array:['lll','222'],fun:function (){
        console.log('sb里面已经走完了')
      }}
      //这个地方就是调用actionsChangeStateInfo当这个调用完-----action之后确返回了一个new promise 然后才能跟上.then
      this.$store.dispatch('actionsChangeStateInfo',zdyprams).then(function(qdobject){
        console.log(qdobject)
      })
      
    },
    changemodule(){
      this.$store.commit('uploadname','lisi')
    },
    asyncbuton(){
      this.$store.dispatch('asyncbbbbbution')
    }
  }
 }
</script>

<style>
.yibu{ width: 100%; float:left; background:red; height: 10px;}
</style>
