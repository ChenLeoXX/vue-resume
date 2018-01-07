<template>
  <div id="app">
    <Header></Header>
    <main>  
     <Editor></Editor>
     <Preview></Preview>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header";
import Preview from "./components/Preview.vue";
import Editor from "./components/Editor.vue";
export default {
  name: "app",
  components: {
    Header,
    Preview,
    Editor,
  }
};
</script>

<style>
html,
body {
  height: 100%;
}
main {
  display: flex;
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fafbfd;
}
.icon{
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    font-size:2.5em;
    fill:#B5C1C7;
    overflow: hidden;
  }
  /* 角标 */
  .active::before{
   content:'';
   display:inline-block;
   position:absolute;
   border-top: 8px solid transparent;
   border-bottom:8px solid;
   border-right:8px solid;
   border-left:8px solid transparent;
   width:0px;
   height:0px;
   color:#3CAFA3;
   bottom:0;
   right:0;
   z-index:1;
}
/* svg换色 */
.svg-active{
  fill:#3CAFA3;
}
/* 激活 */
.active{
  color:#3CAFA3 !important;
  background:#faf6fd;
}
</style>
