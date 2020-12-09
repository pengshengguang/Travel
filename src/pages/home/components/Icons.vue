<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: {
      type: Array
    }
  },
  data () {
    return {
      swiperOptions: {
        autoplay: false // 禁止轮播图来回滚动
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .icons >>> .swiper-container
    overflow: hidden
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      height: 0
      position: relative
      overflow: hidden
      float: left
      width: 25%
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box /*告诉浏览器去理解你设置的边框和内边距的值是包含在width内的，包含其它的border和padding，内容区的实际宽度会是width减去border + padding的计算值*/
        padding: .1rem
        .icon-img-content
          display block
          margin 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis() /*stylus提供的mixins对css代码进行封装*/
</style>
