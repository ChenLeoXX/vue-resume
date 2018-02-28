<template>     
      <div class="preview">
        <section class="profile">
            <h2>{{resume.ability[0].value}}</h2>
            <p>{{resume.ability[0].skill}}</p>
             <AvatarUploader class="avatar"/>
        </section>
        <section class="details">

        </section>
      </div>
</template>

<script>
import AvatarUploader from "./AvatarUploader"
export default {
  name: "Preview",
  props:["resume"],
  data() {
      return {

      }
  },
  components:{
    // AvatarUploader
  }
};
</script>

<style lang="scss" scoped>
.preview {
  margin:20px 15px 15px 20px;
  border-radius: 5px;  
  flex: 1;
  background: #fff;
  box-shadow: 0 3px 6px  rgba(0,0,0,0.4);
}
.avatar{
  margin-top:200px;
}
</style>
