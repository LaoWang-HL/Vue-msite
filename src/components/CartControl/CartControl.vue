<template>
 <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont icon-jianhao" v-show="food.count" @click="updateFoodCount(false)"></div>
    </transition>
    <div class="cart-count">{{food.count}}</div>
    <div class="iconfont icon-add" @click="updateFoodCount(true)"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import {ADD_FOOD_COUNT,DEL_FOOD_COUNT} from '../../store/mutations-type'
  export default {
     props:{
       food:{
         type:Object,
         required:true
       }
     },
    methods: {
      updateFoodCount(isAdd){
       if (isAdd) {
            this.$store.commit(ADD_FOOD_COUNT,{food:this.food})
        }else{
            this.$store.commit(DEL_FOOD_COUNT,{food:this.food})
          }
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 @import "../../common/stylus/mixins.styl"
 .cartcontrol
    
    .icon-jianhao
      font-size: 20px
      padding 4px
      color $green
      &.move-enter-active,&.move-leave-active
        transition all 1s
      &.move-enter,&.move-leave-to
        opacity 0
        transform translateX(20px) rotate(180deg)
    .cart-count
      display: inline-block
      width: 14px
      text-align: center
      font-size: 14px
      color: rgb(147, 153, 159)
      margin 0 8px
    .icon-add
      font-size 20px
      padding: 4px
      
      color $green
    .iconfont
      display: inline-block
      
      

  
</style>
