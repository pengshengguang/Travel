import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' // 解决某些机型移动端300ms点击事件延迟问题
import 'styles/reset.css' // 解决不同手机初始化样式统一问题
import 'styles/border.css' // 解决多倍屏一像素边框问题
import 'styles/iconfont.css' // iconfont图标库引入

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App) // 这是vue2.0的语法，h是vue的函数，createElement
  // components: {App} 这是vue1.0的语法，作用是一样的，将App挂在到el上
  // template: '<App/>'

  // 路由，就是根据网址的不同，返回不同的内容给用户
  // <router-view/> 显示的是当前路由地址所对应的内容

  // .vue结尾的，叫做单文件组件
})
