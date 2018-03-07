<template>
  <div id="app">
    <Header @showResume="showResume" v-show="Show"></Header>
    <main>  
     <Editor :resume="resume"  v-show="Show"></Editor>
     <Preview :resume="resume" :class="{showUp:!Show}"></Preview>
    </main>
    <button class="showOut" @click="showOut" v-show="!Show">退出预览</button>
  </div>
</template>
<script>
import Header from "./components/Header";
import Preview from "./components/Preview";
import Editor from "./components/Editor";
import AvatarUploader from "./components/AvatarUploader"
export default {
  name: "app",
  data(){
    return {
      Show:true,
      resume:{
           profile: {
        name: "",
        sex:"",
        age: "",
        city: "",
        title:"",
        degree:"",
      },    
       contact:{
        phone1:"",
        email:"",
        wechat:"",
        github:"",
        blog:""
      },
          workExp: [{company: "",time: "",details: ""}],
          studyExp:[{school:"",duration:""}],
          awardExp:[{award:''}],
          projectExp:[{project:'',details:''}],
          ability:[{value:50,skill:'JavaScript',color:"#ef69b3"}]
      }
    }
  },
  components: {
    Header,
    Preview,
    Editor,
    AvatarUploader
  },
  methods:{
    showResume(data){
      this.Show= data
    },
    showOut(){
      this.Show = true
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
}
main {
  height: 100%;
  display: flex;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
background: #076585;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #fff, #076585);
background: linear-gradient(to top, #fff, #076585); 

}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  font-size: 2.5em;
  fill: #b5c1c7;
  overflow: hidden;
}
/* 角标 */
.active::before {
  content: "";
  display: inline-block;
  position: absolute;
  border-top: 8px solid transparent;
  border-bottom: 8px solid ;
  border-right: 8px solid ;
  border-left: 8px solid transparent;
  width: 0px;
  height: 0px;
  color: #3cafa3;
  bottom: 0;
  right: 0;
  z-index: 1;
}
/* svg换色 */
.svgActive {
  fill: #3cafa3;
}
/* 激活 */
.active {
  color: #3cafa3 !important;
  background: #fafbfd;
  font-weight: bold;
  box-shadow: 3px 2px 6px rgba(0, 0, 0, 0.4);
 }
 .showOut{
   width:100px;
   padding: 15px;
   border-radius: 5px;
   background:#3cafa3;
   border:0;
   outline: none;
   color:snow;
   position: fixed;
   bottom:25px;
   right:55px;
   cursor: pointer;
 }
 .showOut:hover{
   background: rgba(60,175,163,.8)
 }
 .showUp{
   margin: 20px auto !important;
 } 
</style>