<template>
<transition name="fade">
 <div class="coverPaper" v-show="active">
    <div class="login">
      <header>登录 <i class="el-icon-close" @click="close"></i></header>
      <form action="login" class="action" @submit.prevent="logIn($event)">
          <div id="account">
            <label for="account"  :class="{Ontransform:accountTrans}">账号</label>
            <input type="text"  v-model.trim="formData2.username" @focus="inputFoucs($event)" @blur="inputBlur($event)" required >
          </div>
          <div id="password">
            <label for="password"  :class="{Ontransform:passwordTrans}">密码</label>
            <input type="password" v-model.trim="formData2.password" @focus="inputFoucs($event)" @blur="inputBlur($event)" required >
          </div>
          <div style="color:red; position:relative;top:15px;" v-show="error">密码或用户名错误</div>
          <input type="submit" value="登录" class="submit">
      </form>
    </div>
</div>
</transition>
</template>
<script>
import AV from 'leancloud-storage'
export default {
  name:'Login',
  props:['active'],
  data(){
    return{
      currentuser:null,
      formData2:{
        username:"",
        password:""
      },
      accountTrans:false,
      passwordTrans:false,
      error:false
      }
  },
  created(){
    //在生命周期钩子里检测是否已经登录了
    this.currentuser =this.getCurrentUser()
    if(this.currentuser){
      this.$emit('hasLogin',this.currentuser)//告诉父级组件已经是登录状态了并且传递用户信息(用于显示不修改)
    }
  },
    methods:{
    logIn(e){
      //登录之后调用AV.User.current()会返回当前登录用户的信息,如果没用登录调用的话返回null
      AV.User.logIn(this.formData2.username,this.formData2.password).then((loguser)=>{
          this.currentuser = this.getCurrentUser()
          this.$emit('hasLogin',this.currentuser)//告诉父级组件已经是登录状态了并且传递用户信息(用于显示不修改)
          this.close()
      },(error)=>{
        this.error = true
      })
    },
    getCurrentUser(){
       let current = AV.User.current()
        if(current){
            let {id,attributes:{username},createdAt} = current
            return {id,username,createdAt}             
        }else{
          return null
        }   
    },
    close(){
        this.active = false
        this.$emit('close',false)
    },
    inputFoucs(e){
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
      e.target.style.borderBottom='2px solid rgb(64, 158, 255)'
      this.error=false
    },
    inputBlur(e){
      if( e.target.getAttribute('type') ==='text' && e.target.value === ''){
          this.accountTrans=false;
          e.target.style.borderBottom = '2px solid gray'
      }else if(e.target.getAttribute('type') ==='password' && e.target.value === ''){
          this.passwordTrans=false;
          e.target.style.borderBottom = '2px solid gray'
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
.login{
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
        z-index:1;
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
</style>


