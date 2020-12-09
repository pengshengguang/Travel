<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data: function () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/11/248b40e34116fb.jpg_r_640x214_560e7d05.jpg',
        title: '珠海打卡',
        desc: '要休闲，要观光，统统满足你'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg',
        title: '欢乐长隆',
        desc: '世界欢乐汇聚长隆，这里拥有多个大型游乐设备和精彩的演出，和小伙伴们一起感受刺激的体验'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1602/9c/39c5ce9ff58609.jpg_r_640x214_efb90102.jpg',
        title: '粤西温泉',
        desc: '自驾粤西，这里有最全最心仪的温泉池，环境优美，舒舒服服的泡个热汤，远离繁忙的工作'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 38%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis() /*相对于Recommend.vue组件，它的上一级.item-info不是flex布局，.item-info 这里也不用加min-width，有点不太理解*/
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
