import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions: {
    // 改变城市changeCity方法，非常简单，没有批量操作，没有异步操作，可以直接省略actions里面的方法
    // 外面直接把this.$store.dispatch('changeCity', city)，改为 this.$store.commit('changeCity', city)即可
    // changeCity (ctx, city) { // 第一个参数ctx，代表上下文，使用它可以调用commit方法
    //   ctx.commit('changeCity', city)
    // }
  },
  mutations,
  // 这里的getters只是用来展示例子，作用有点像vue里面的computer，当我们需要根据state里面的数据算出新的数据时，我们就可以使用getters的数据，这样避免了数据的冗余
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
// vuex里面，state、getters、mutations、actions、modules，五块内容
// modules是用来解决复杂的业务场景时，例如后台数据管理，会有很多不同模块的业务数据进行存储，那么modules就可以对模块进行划分，从而更加容易维护
