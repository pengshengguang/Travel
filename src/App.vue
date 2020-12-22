<template>
  <div id="app">
    <keep-alive> <!--作用，当路由的内容加载一次之后，我路由的内容就放在内存当中，下一次再进同一个路由时，不需要重新渲染组件，只需要从内存里拿出来显示就行-->
      <router-view/>
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
