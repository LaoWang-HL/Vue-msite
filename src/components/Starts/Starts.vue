<template>
   <div class="star star-24">
    <span class="star-item" :class="starClass" v-for="(starClass, index) in starClassArr" :key="index"></span>
  </div>
</template>
t
<script>
export default {
props:{
    rating:{
        type:Number,
        required:true
    }
},
computed:{
  starClassArr(){
      let {rating}=this
      let classArr=[]

      let onCount=Math.floor(rating)
      for(var i=0;i<onCount;i++){
         classArr.push('on')
      }
      rating-onCount !==0&&classArr.push('half')

      while(classArr.length<5){
          classArr.push('off')
      }
      return classArr
  }
 }
}
</script>

<style lang="stylus" rel='stylesheet/stylus'>
@import "../../common/stylus/mixins.styl"
 .star //2x图 3x图
                            float left
                            font-size 0
                            .star-item
                              display inline-block
                              background-repeat no-repeat
                            &.star-48
                              .star-item
                                width 20px
                                height 20px
                                margin-right 22px
                                background-size 20px 20px
                                &:last-child
                                  margin-right: 0
                                &.on
                                  bg-image('../../common/images/stars/star48_on')
                                &.half
                                  bg-image('../../common/images/stars/star48_half')
                                &.off
                                  bg-image('../../common/images/stars/star48_off')
                            &.star-36
                              .star-item
                                width 15px
                                height 15px
                                margin-right 6px
                                background-size 15px 15px
                                &:last-child
                                  margin-right 0
                                &.on
                                  bg-image('../../common/images/stars/star36_on')
                                &.half
                                  bg-image('../../common/images/stars/star36_half')
                                &.off
                                  bg-image('../../common/images/stars/star36_off')
                            &.star-24
                              .star-item
                                width 10px
                                height 10px
                                margin-right 3px
                                background-size 10px 10px
                                &:last-child
                                  margin-right 0
                                &.on
                                  bg-image('../../common/images/stars/star24_on')
                                &.half
                                  bg-image('../../common/images/stars/star24_half')
                                &.off
                                  bg-image('../../common/images/stars/star24_off')
</style>