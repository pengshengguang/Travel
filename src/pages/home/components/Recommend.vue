<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data: function () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/p/tts6/2011/be/647cdfb55463f802.jpg_160x160_baa2ed79.jpg',
        title: '珠海一日游',
        desc: '珠海一日游 船游澳门+港珠澳大桥 早上/中午出发 含接送纯玩'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/p/tts5/2001/85/aa3944b7ebb37102.jpg_160x160_e7696bb3.jpg',
        title: '【去哪儿获奖线路】',
        desc: '【去哪儿获奖线路】港珠澳大桥+珠海渔女+日月贝剧院+餐1日游'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/p/tts4/2005/4a/560af3958b7bfc02.jpg_160x160_e385dad8.jpg',
        title: '港珠澳大桥+珠海观光1日游',
        desc: '【珠海出发+免费上门接】港珠澳大桥+珠海观光1日游'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .recommend-title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0 /*为什么要设置这个？因为此时是flex布局，item-info没有设置宽度，因此单行文本溢出无法使用ellipsis()来进行点点点省略*/
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
