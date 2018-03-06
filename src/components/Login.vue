<template>
 <div class="coverPaper" v-show="active">
    <div class="login">
      <header>登录 <i class="el-icon-close" @click="close"></i></header>
      <form action="" class="action">
          <div id="account">
            <label for="account"  :class="{Ontransform:accountTrans}">账号</label>
            <input type="text" @focus="inputFoucs($event)" @blur="inputBlur($event)" required >
          </div>
          <div id="password">
            <label for="password"  :class="{Ontransform:passwordTrans}">密码</label>
            <input type="password" @focus="inputFoucs($event)" @blur="inputBlur($event)" required >
          </div>
          <input type="submit" value="登录" class="submit">
      </form>
    </div>
</div>
</template>
<script>
export default {
  name:'Login',
  props:['active'],
  data(){
    return{
      accountTrans:false,
      passwordTrans:false
      }
  },
    methods:{
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
</style>


