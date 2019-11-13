import {
  SAVE_ADDRESS,
  SAVE_CATEGORYS,
  SAVE_SHOPS
} from '../mutations-type'

const state={
  address: {}, // 用户地址信息
  categorys: [], // 用于食品分类的数据
  shops: [], // 商家列表信息
  latitude: 40.10038,
  longitude: 116.36867,
}

const actions={
  
}

const mutations={
  [SAVE_ADDRESS](state,{address}){
    state.address=address
  },
  [SAVE_CATEGORYS](state,{categorys}){
    state.categorys=categorys
  },
  [SAVE_SHOPS](state,{shops}){
    state.shops=shops
  }
}

const getters={

}


export default{
  state,
  actions,
  mutations,
  getters
}