<template>
  <main>
      <div class="editor">我是编辑</div>
      <div class="preview">我是预览</div>
  </main>
</template>
<script>
export default {
  name:"Content",
  data(){

  }
}
</script>
<style lang="scss" scoped>
.editor,.preview{
  border:1px solid ;
}
main{
    margin-top:20px;
    display: flex;
    flex: 1;
    height: 100%;
}
.editor{
  width:20em;
}
.preview{
  flex:1;
}
</style>


