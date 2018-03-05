<template>
  <div class="uploader">
      <img :src="imgSrc" alt="avatar">
      <input type="file" name="" id="select"  @change="select()" ref="selector" accept="image/png,image/jpeg">
  </div>
</template>
<script>
export default {
name:'AvatarUploader',
data(){
    return{
        imgSrc:"http://ww1.sinaimg.cn/large/be86cc18gy1fowjqsjlvzj20a409r0ss.jpg"
    }
},
  methods:{
    select(){
        let url = window.URL.createObjectURL || window.webkitURL.createObjectURL;
        let file = this.$refs.selector.files[0]
        this.imgSrc= url(file)
    }
  }
}
</script>
<style lang="scss" scoped>
.uploader{
   position: relative;
   img{
    display:block;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    }
    input{
    display: inline-block;
    position: absolute;
    width: 120px;
    height: 120px;
    top:0px;
    left:0px;
    border-radius:50%;
    opacity:0;
    z-index:1;
    cursor: pointer;
    }
}
</style>



