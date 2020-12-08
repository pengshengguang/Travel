<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <!--<swiper-slide>-->
        <!--<img class="swiper-img" src="http://imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg" alt="">-->
      <!--</swiper-slide>-->
      <!--<swiper-slide>-->
        <!--<img class="swiper-img" src="http://imgs.qunarzz.com/vs_ceph_vcimg/569cae4ae98e9793f7341e85eed73c54.jpeg" alt="">-->
      <!--</swiper-slide>-->
      <swiper-slide  v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination', // 这个配置可以显示轮播图的轮播点
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg'
      }, {
        id: '0002',
        imgUrl: 'http://imgs.qunarzz.com/vs_ceph_vcimg/569cae4ae98e9793f7341e85eed73c54.jpeg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  /* 我现在想要让轮播图的分页点先显示成白色，因为 swiper-pagination-bullet-active 这个class不在本组件中，而是在 <swiper></swiper>这个组件中
     又因为scoped的原因，导致这里写class是只对本组件作用，那么怎么办呐？样式穿透呗！！！
     >>> 的意思是，让wrapper下面，所有子组件只要出现swiper-pagination-bullet-active这个class的，让它都变成白色，这样就不受scope的限制了*/
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 30.5%
  .swiper-img
    width: 100%
</style>
