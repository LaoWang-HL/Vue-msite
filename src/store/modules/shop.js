import {
  getShopDatas
} from '../../api'
import Vue from 'vue'
import {SAVE_SHOPDATAS,ADD_FOOD_COUNT,DEL_FOOD_COUNT} from '../mutations-type'

const state={
  shopDatas:{}
}

const actions={
  async getShopDatasAction({commit}){
    let result=await getShopDatas()
    console.log(result)
    if (result.code===0) {
      commit(SAVE_SHOPDATAS,{shopDatas:result.data})
    }
  }
}

const mutations={
[SAVE_SHOPDATAS](state,{shopDatas}){
  state.shopDatas=shopDatas
},
 [ADD_FOOD_COUNT](state,{food}){
   if (food.count) {
     food.count++
   }else{
      Vue.set(food,'count',1)
   }
 },
 [DEL_FOOD_COUNT](state,{food}){
    if(food.count){
      food.count--
    }
 }
}

const getters={

}




export default{
  state,
  mutations,
  actions,
  getters,
}