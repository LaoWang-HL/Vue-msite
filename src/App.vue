<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-if="$route.meta.isShowFooterGuide"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'

export default {
   components:{FooterGuide}
  }

</script>

<style>

</style>
