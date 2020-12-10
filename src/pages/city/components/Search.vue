<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      width: 100%
      height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
      box-sizing: border-box /*原来是这样用的啊，因为wdith: 100%，如果你加了padding，那么内容又会增加.2rem，很显然，长度超出屏幕宽度，右边就被挤出去了*/
      padding: 0 .1rem       /*加上了box-sizing: border-box，就能完美解决这个问题！！！！！！get it*/
</style>
