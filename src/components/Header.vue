<template>
<div>
  <header class="topbar">
    <div class="logo">
      <a href="">
      <span>QuickResumer</span>
      </a>
    </div>
    <div class="user">
      <button class="sign-in" @click="loginActive = true">登录</button>
      <button class="sign-up" @click="registryActive = true">注册</button>
      <button class="resume-preview" @click="showResume">预览</button>
    </div>
    <!-- 登录注册组件利用父子间通信确定 active遮罩的出现隐藏 -->
    <login :active="loginActive" @close="changeCover"/> 
    <registry :active="registryActive" @close="changeCover"/> 
  </header>
</div>  
</template>
<script>
import Login from './Login'
import Registry from './Registry'
export default {
  name: 'Header',
  components:{
  Login,
  Registry
  },
  data () {
    return {
      loginActive:false,
      registryActive:false
    }
  },
  methods:{
    changeCover(data){
      console.log(data)
      this.registryActive = this.loginActive = data
    },
    showResume(){
      this.$emit('showResume',false)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.logo{
  font-size:26px;
  font-style: italic;
  span{ 
width: 440px; 
color: #01E2C5; 
text-shadow: 0 1px 1px  green;

  }
}
.topbar{
  background: #383333;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  box-shadow: 0 3px 6px  rgba(0,0,0,0.2);
}
.sign-in,.sign-up,.resume-preview{
  color:white;
  border-radius: 4px;
  background: #1DA496;
  border:none;
  margin-left:10px;
  font-weight: bold;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
   &:hover{
     background:rgb(97, 202, 167);
   }
}
</style>