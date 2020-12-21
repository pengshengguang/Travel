import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let defaultCity = '肇庆'
// 这里的try catch 是为了防止用户浏览器设置了隐身模式或者关闭本地存储功能，直接写localStorage是会使得代码报错抛异常，
// 所以只要用到localStorage，为了保守起见，都要try..catch
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  actions: {
    // 改变城市changeCity方法，非常简单，没有批量操作，没有异步操作，可以直接省略actions里面的方法
    // 外面直接把this.$store.dispatch('changeCity', city)，改为 this.$store.commit('changeCity', city)即可
    // changeCity (ctx, city) { // 第一个参数ctx，代表上下文，使用它可以调用commit方法
    //   ctx.commit('changeCity', city)
    // }
  },
  mutations: {
    changeCity (state, city) { // 第一个参数state，就是等于我们共用数据state
      state.city = city
      try {
        if (localStorage.city) {
          localStorage.city = city
        }
      } catch (e) {}
    }
  }
})
