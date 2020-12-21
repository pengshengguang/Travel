<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}<span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']) // mapState的作用就是将state属性映射到这个组件的计算属性当中，...扩展运算符是es9的东西 （这样可以省去在dom中写 {{this.$store.state.city}}）
  }
}
</script>

<style lang="stylus" scoped>
  /*@import "../../../assets/styles/varibles.styl"         在CSS引用CSS，要@import，然后@代表src目录，但是CSS中要写成 ~@ */
  /*@import "~@/assets/styles/varibles.styl"               还可以继续优化，styles目录经常用，在webpack.base.conf.js中起个别名就行*/
  @import "~styles/varibles.styl"
  .header
    display: flex
    line-height: $headerHeight
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
      min-width: 1.04rem /*这里如果用 width写死宽度，会导致城市名数字多而导致换行！！！！！*/
      padding: 0 .1rem
      text-align: center
      color: #fff
      .arrow-icon
        font-size: .24rem
</style>
