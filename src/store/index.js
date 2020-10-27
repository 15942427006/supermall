import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    counter:111,
    student:[
      {id:'01',name:'why',age:'23'},
      {id:'02',name:'koby',age:'22'},
      {id:'03',name:'cury',age:'29'},
      {id:'04',name:'litao',age:'22'},
      {id:'05',name:'wwyy',age:'29'}
    ]
  },//保存状态
  mutations:{
    addation(state){
      state.counter++
    },
    addationbutton(state,counts){
      state.counter+=counts
    },
    addasss(state, stu){
      state.student.push(stu)
    },
    yibuaction(state){
      console.log('经过了action 的时间异步到了mutation这里------通过vue组件按钮点击')
      console.log('我要修改state的信息')
      state.counter++
    }
    
  },//改变
  actions:{
   //在action 里边的state 不是state 被翻译成为上下文  这个上下文叫context==store
   actionsChangeStateInfo(context,prams){

    return new Promise((resolve,reject)=>{
          //模拟的异步操作
          setTimeout(function(){
            context.commit('yibuaction')
            console.log(prams)
            console.log(prams.name)
            console.log(prams.num)
            console.log(prams.array[1])
            prams.fun()
            const wode=prams.name+'lllttt'
            const qdobject={
              jjj:wode
            }
            resolve(qdobject)
          },1000)
          //模拟的异步操作
    
    })

 

   }
  },//行动
  getters:{
    sss(state) {
     return  state.student
    },
    more20(state){
      return state.student.filter(item=>item.age>21).map(item => item) 
    },
    nazhi(state,getters){
      //如何拿到getter的值
      return getters.more20.length
      
    }
  },//get
  modules:{
    moduleA:{
      state:{
        name:'modele中的名字',
        ages:'vue'
      },
      mutations:{
        uploadname(state,payload){
          state.name=payload
          //没有异步请求的时候 直接进入到mutations 的时候在模块当中使用的是方法 要在vue组件里使用
          //payload是传进来的参数
        },
        asyncupdatestate(state,payload){
          state.ages=payload
        }
      },
      getters:{
        fullname(state){
         return state.ages+'--------dasb'
        },
        fullname2(state,getters){
          return getters.fullname+'--------caonima'
         },
         //这个是模块当中调用root当中的内容
         fullname3(state,getters,rootstate){
          return getters.fullname2+ rootstate.counter
         }
      },
      actions:{
        //actions中有个上下文context这个厉害
        asyncbbbbbution(context){
          console.log(context)
          setTimeout(()=>{
            context.commit('asyncupdatestate','oooooooooooooooooooo')
            

          },1000)
        }
        
      }
    }
  }//模块

})


export default store

 