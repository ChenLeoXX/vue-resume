<template>
  <div id="app">
    <Header></Header>
    <Content></Content>
  </div>
</template>

<script>
import Header from './components/Header'
import Content from './components/Content.vue'
export default {
  name: 'app',
  components: {
    Header,
    Content
  }
}
</script>

<style>
html,body{
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
