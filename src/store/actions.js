import {
  SAVE_ADDRESS,
  SAVE_CATEGORYS,
  SAVE_SHOPS,
  SAVE_USER,
  SAVE_TOKEN

} from './mutations-type'
import {
  getAddress,
  getCategorys,
  getShops,
  autoLogin
   
} from '../api'

export default {
 async getAddressAction({commit}){
    let result =await getAddress(40.10038,116.36867)
    if (result.code===0) {
      console.log(result)
      commit(SAVE_ADDRESS,{address:result.data})
    }
  },
  async getCategorysAction({commit}){
    let result=await getCategorys()
    if (result.code===0) {
      commit(SAVE_CATEGORYS,{categorys:result.data})
    }
  },
  async getShopsAction({commit,state}){
    let result=await getShops(state.latitude,state.longitude)
    if(result.code===0){
      commit(SAVE_SHOPS,{shops:result.data})
    }
  },
  getUserAction({commit},{user}){
    commit(SAVE_TOKEN,{token:user.token})
    delete user.token
    commit(SAVE_USER,{user})
  },
   async autoLoginAction({commit}){
     let result=await autoLogin()
     console.log(result)
     if (result.code===0) {
       commit(SAVE_USER,{user:result.data})
     }
   }
}