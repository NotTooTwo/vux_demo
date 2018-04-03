<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='less'>
@import '~vux/src/styles/reset.less';
@import 'weui/dist/style/weui.min.css';
</style>
