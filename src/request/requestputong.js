import axios from 'axios'



export function request(config) {
  //1.创建一个axios实例
  const instance=axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000

  })
  //2.axios的拦截器
  instance.interceptors.request.use(config=>{
    //console.log('config配置被我给拦了下来')
    //拦截下来要做什么事呢？1比如config里面的配置信息不符合服务器的要求
    //比如每次发送网络请求的时候  都有个加载的动画  成功的时候把动画消失掉
    //某些登录必须携带token的东西 给用户一个提示
    return config
  })

  instance.interceptors.response.use(res=>{
    //这个地方想返回谁的值就返回谁的值
    return res.data  })

  return instance(config)
}

