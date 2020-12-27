<template>
  <div id="app">
    <keep-alive exclude="Detail"> <!--作用，当路由的内容加载一次之后，我路由的内容就放在内存当中，下一次再进同一个路由时，不需要重新渲染组件，只需要从内存里拿出来显示就行-->
      <router-view/> <!--exclude="Detail  作用是Detail这个组件不被缓存，也就是说每一次进入Detail，都得重新执行组件渲染"-->
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
