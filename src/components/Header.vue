<template>
<div>
  <header class="topbar">
    <div class="logo">
      <a href="/">
      <span>QuickResumer</span>
      </a>
    </div>
    <div class="user">
      <span class="user-name" v-if="hasLogin">您好,{{currentuser.username}}</span>
      <button class="save" @click="save" v-if="hasLogin">保存</button>
      <button class="logout" @click="logout" v-if="hasLogin">注销</button>
      <button class="sign-in" @click="loginActive = true" v-if="!hasLogin">登录</button>
      <button class="sign-up" @click="registryActive = true" v-if="!hasLogin">注册</button>
      <button class="resume-preview" @click="showResume">预览</button>
    </div>
    <!-- 登录注册组件利用父子间通信确定 active遮罩的出现隐藏 -->
    <login :active="loginActive"   @close="changeCover" @hasLogin="isLogin"/> 
    <registry :active="registryActive" @close="changeCover"/> 
  </header>
</div>  
</template>
<script>
import AV from 'leancloud-storage'
import Login from './Login'
import Registry from './Registry'
export default {
  name: 'Header',
  props:['resume'],
  components:{
  Login,
  Registry
  },
  created(){
    //在生命周期钩子里检测是否已经登录了后获取数据
    this.currentuser =this.getCurrentUser()
    this.fetchResume()
  },
  data () {
    return {
      currentuser :null,
      loginActive:true,
      registryActive:false,
      hasLogin:false,
      userInfo:null,
      fakeresume:this.resume
    }
  },
  methods:{
    save(){
      this.$message({
            type:'success',
            message:'保存成功'
          })
      this.saveOrUpdate()
    },
    fetchResume(){//获取用户数据
        if(this.currentuser){
      this.loginActive=false
      this.hasLogin = true
      var query = new AV.Query('AllResume')
      query.find().then((resume)=>{
        let userResume = resume[0]
        let id = userResume.id
        this.fakeresume = userResume.attributes.content
        this.fakeresume.id = id
         this.saveOrUpdate()
      },function(error){
        console.log(error)
      })
    }
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
    isLogin(){//根据子组件判断是否已经登录
       this.currentuser = this.getCurrentUser()//登录之后调用AV.User.current()会返回当前登录用户的信息,如果没用登录调用的话返回null
       this.fetchResume()
      if(this.currentuser){
        this.hasLogin = true
        this.loginActive= false
      }
    },
    saveOrUpdate(){
      if(this.fakeresume.id){
        this.updateResume()
      }else{
        this.saveResume()
      }
    },
    updateResume(){
      let userResume = AV.Object.createWithoutData('AllResume',this.fakeresume.id)
      console.log(this.fakeresume)
      userResume.set('content',this.fakeresume)
      userResume.save().then(()=>{
         this.$emit('save',this.fakeresume)//通知父组件改变数据
         
      },()=>{
        this.$message({
            type:'error',
            message:'保存失败,请重试'
          })
      })
    },
    saveResume(){//保存简历数据
      let Resume = AV.Object.extend('AllResume')
      let userResume = new Resume()
      let acl = new AV.ACL() //设置用户权限
      acl.setReadAccess(AV.User.current(),true)
      acl.setWriteAccess(AV.User.current(),true)
      userResume.set('content',this.fakeresume)//设置用户单独数据内容
      userResume.setACL(acl)//设置用户权限
      userResume.save().then((resume)=>{
       this.fakeresume.id = resume.id
         this.$message({
            type:'success',
            message:'保存成功'
          })
      },function(error){
        alert(error.rawMessage)
      })
    },
    logout(){//用户注销方法
      this.$confirm('如果未保存,注销将会失去当前修改数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          AV.User.logOut()
          this.userInfo = null
          window.location.reload()
          this.$message({
            type: 'success',
            message: '注销成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
    },
    changeCover(data){//改变模态框
      console.log(data)
      this.registryActive = this.loginActive = data
    },
    showResume(){//预览简历
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
.sign-in,.sign-up,.resume-preview,.save,.logout{
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
.user-name{
  font-size:20px;
  color:rgb(97, 202, 167);
  margin-right:20px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>