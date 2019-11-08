<template>
  <div>
    <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item on"  :class="{active:$route.path==='/msite'}" @click="goPath('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{active:$route.path==='/search'}" @click="goPath('/search')">
      <span class="item_icon">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span>搜索</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{active:$route.path==='/order'}" @click="goPath('/order')">
      <span class="item_icon">
        <i class="iconfont icon-6"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{active:$route.path==='/profile'}" @click="goPath('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-wode"></i>
      </span>
      <span>我的</span>
    </a>
  </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      goPath(path){
        this.$route.path!==path&&this.$router.replace(path)
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      
      &.active
       color $green
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
   
       
</style>
