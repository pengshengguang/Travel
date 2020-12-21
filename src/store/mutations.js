export default {
  changeCity (state, city) { // 第一个参数state，就是等于我们共用数据state
    state.city = city
    try {
      if (localStorage.city) {
        localStorage.city = city
      }
    } catch (e) {}
  }
}
