let defaultCity = '肇庆'
// 这里的try catch 是为了防止用户浏览器设置了隐身模式或者关闭本地存储功能，直接写localStorage是会使得代码报错抛异常，
// 所以只要用到localStorage，为了保守起见，都要try..catch
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
