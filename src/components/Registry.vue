<template>
<transition name="fade">
 <div class="coverPaper" v-show="active" @keyup.esc="esc">
    <div class="registry">
      <header>注册 <i class="el-icon-close" @click="close"></i></header>
      <form  class="action" @submit.prevent="signUp">
          <div id="account">
            <label for="account"  :class="{Ontransform:accountTrans}">用户名</label>
            <input type="text" v-model.trim="formData.username" @focus="inputFoucs($event)" @blur="inputBlur($event)" maxlength="16" required >
          </div>
          <div id="password">
            <label for="password"  :class="{Ontransform:passwordTrans}">密码</label>
            <input type="password" v-model.trim="formData.password" @focus="inputFoucs($event)" @blur="inputBlur($event)" maxlength="16" required>
          </div>
          <div class="error-msg" v-show="isErrorName">用户名需输入4-16个字符，不包括空格</div>
          <div class="error-msg" v-show="isErrorWord">密码需输入8-16个字符，不包括空格</div>
          <div class="error-msg" v-show="isExist">用户名已被注册</div>
          <input type="submit" value="注册" class="submit">
      </form>
    </div>
</div>
</transition>
</template>
<script>
import AV from 'leancloud-storage'
export default {
  name:'Registry',
  props:['active'],
  data(){
    return{
      accountTrans:false,
      passwordTrans:false,
      isErrorName:false,
      isErrorWord:false,
      isExist:false,
      formData:{
        username:"",
        password:""
      }
      }
  },
    methods:{
      esc(){
        this.active = false
        this.$emit('close',false)     
    },
    close(){//关闭模态框,通知父组件更新状态
        this.active = false
        this.$emit('close',false)
    },
    inputFoucs(e){//输入框聚焦特效
      switch(e.target.getAttribute('type')){
        case 'text':
          this.accountTrans=true;
          break;
        case 'password':
          this.passwordTrans=true;
          break
        default:
        cosole.log(new Error())
      }
      e.target.style.borderBottom='2px solid rgb(64, 158, 255)' //再次聚焦输入框取消错误提示
      this.isExist = false
      this.isErrorName= false
      this.isErrorWord= false
    },
    inputBlur(e){//输入框失去焦点特效
      if( e.target.getAttribute('type') ==='text' && e.target.value === ''){
          this.accountTrans=false;
          e.target.style.borderBottom = '2px solid gray'
      }else if(e.target.getAttribute('type') ==='password' && e.target.value === ''){
          this.passwordTrans=false;
          e.target.style.borderBottom = '2px solid gray'
      }
    },
    signUp(){//leancloud 注册
      let isVerify = this.verfyUser()
      if(isVerify){
        let user = new AV.User()
      user.setUsername(this.formData.username)
      user.setPassword(this.formData.password)
      user.signUp().then((signupUser)=>{
      this.close()
      window.location.reload()    
      },(error)=>{
        this.isExist =true//错误信息
      });
      }
    },
    verfyUser(){ //验证用户输入信息是否合法
      let checkUsername = this.formData.username
      let checkPassWord = this.formData.password
      if(checkUsername.includes(' ') || checkUsername.length < 4 ){//判断用户名是否合法
          this.isErrorName =true
      }else if(checkPassWord.includes(' ') || checkPassWord.length <8){//判断密码是否合法
        this.isErrorName = false //如果进入到这一步说明用户名输入合法
        this.isErrorWord = true
      }else{
        this.isErrorWord = false//如果进入到这一步说明用户名和密码都是合法的
          return true
      }
    }
   }
}
</script>
<style lang="scss">
.coverPaper{
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom: 0;
  background:rgba(0,0,0,0.5);
  z-index:99;
}
.registry{
  width:400px;
  border-radius:5px;
  background: #fff;
  position: absolute;
  top:45%;
  left:50%;
  transform:translate(-50%,-50%);
  padding:10px 10px 20px 10px;
  header{
    padding:5px;
    i{
      float:right;
      cursor: pointer;
      font-size: 17px;
      &:hover{
        color:blue;
      }
    }
  }
  .action{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:15px;
    input[type="text"],input[type="password"]{
      border-radius: 2px;
      padding:7px;
      margin-top:25px;
      width:300px;
      border:0;
      border-bottom:2px solid gray;
      outline: none;
      position: relative;
      z-index:1;
      background:transparent;
    }
    #account,#password{
      position: relative;
      label{
        display: block;
        position: absolute;
        top:28px;
        left:10px;
        color:#d9d9d9;
        font-size:20px;
        transition-duration: .3s;
      }
    }
    .submit{
      width:300px;
      border-radius:3px;
      margin-top:30px;
      align-self: center;
      background:rgb(64, 158, 255);
      border:0;
      color:#fff;
      cursor: pointer;
      text-align: center;
      height: 35px;
      &:hover{
        background: rgba(64, 158, 255,.8)
      }
    }
  }
}
.Ontransform{
  transform:translate(-5px,-20px)   scale(.9);
  transition-duration:.3s;
  transition-timing-function:ease-out;
  color:rgb(64, 158, 255)!important;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.error-msg{
  color:red; 
  position:relative;
  top:15px;
  font-weight:bold;
}
</style>