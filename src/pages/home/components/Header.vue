<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      {{city}}<span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: {
      type: String
    }
  }
}
</script>

<style lang="stylus" scoped>
  /*@import "../../../assets/styles/varibles.styl"         在CSS引用CSS，要@import，然后@代表src目录，但是CSS中要写成 ~@ */
  /*@import "~@/assets/styles/varibles.styl"               还可以继续优化，styles目录经常用，在webpack.base.conf.js中起个别名就行*/
  @import "~styles/varibles.styl"
  .header
    display: flex
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      .back-icon
        font-size: .4rem
        text-align: center
    .header-input
      flex: 1
      height: .62rem
      line-height: .62rem
      margin-top: .12rem
      margin-left .2rem
      background-color: #fff
      border-radius: .1rem
      padding-left: .2rem
      color: #ccc
    .header-right
      width: 1.24rem
      text-align: center
      .arrow-icon
        font-size: .24rem
</style>
