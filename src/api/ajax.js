import qs from 'qs'
import axios from 'axios'
import router from '../router'

const instance=axios.create({
   baseURL:'/api'
})
//请求拦截器
instance.interceptors.request.use(config=>{

  if (config.method.toUpperCase()==='POST'&&config.data instanceof Object) {
    config.data=qs.stringify(config.data)
  }
  //从本地数据里获取token
  let token=localStorage.getItem('token_key')
  if (config.headers.needToken) {
    
    if (token) {//判断token是否有值，有的话把token保存在请求头中
      config.headers.authorization=token
      console.log(token)
    }else{
      throw new Error('没有token,请先登录')
    }
  }

  return config
})

instance.interceptors.response.use(
  response=>response.data,
  error=>{
    if (!error.response) {
      alert(error.message)
      router.currentRoute.path!=='/admin'&&router.replace('/admin')
    }else{
      if (error.response.status===401) {
        alert('token已经过期，请重新登录')
        router.currentRoute.path!=='/admin'&&router.replace('/admin')
      }else if (error.response.status===404) {
        alert('请求资源未找到')
      }else{
        alert('未知错误')
      }
    }
    
    return new Promise(()=>{})
  }
)
export default instance