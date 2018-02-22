<template>
   <div class="editor">
     <!-- todos 把联系方式组件和个人信息组件结合成一个组件 -->
     <!-- todos 实现一个头像上传 -->
     <!-- 左侧导航 -->
      <nav>
          <ul class="tabs">
            <li v-for="i in [0,1,2,3,4,5,6]" 
                :class="{active:currentInx === i}"
                @click='currentInx = i' :key="i">
           <svg :class="{svgActive:currentInx === i}" 
                 class="icon">
              <use :xlink:href="`#icon-${icons[i]}`"></use>
          </svg>
          <div>{{msg[i]}}</div>
          </li>
        </ul>  
      </nav>
       <!--右侧编辑栏  -->
  <ol> 
    <li v-if="currentInx === 0">
      <h1>About me</h1>
      <!-- 个人信息组件 -->
      <ProfileEditor :profile="profile"/>
    </li>
    <li v-if="currentInx === 1">
    <h1>Contact</h1>
    <el-form>
      <el-form-item label="手机">
            <el-input v-model="profile.name"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
            <el-input v-model="profile.name"></el-input>
      </el-form-item>
      <el-form-item label="微信">
            <el-input v-model="profile.name"></el-input>
      </el-form-item>
      <el-form-item label="Github">
            <el-input v-model="profile.name"></el-input>
      </el-form-item>
      <el-form-item label="博客">
            <el-input v-model="profile.name"></el-input>
      </el-form-item>
    </el-form>
    </li>
        <li v-if="currentInx === 2">
    <h1>Projects</h1>
     <el-button type="primary"  class="add-button" @click="addProjectItem"><i class="el-icon-circle-plus-outline"></i></el-button>
    <ProjectEditor :items="projectExp"/>
    </li>
        <li v-if="currentInx === 3">
    <h1>Skill</h1>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    </li>
    <li v-if="currentInx === 4">
      <h1>Work Experience</h1>
      <el-button type="primary"  class="add-button" @click="addWorkItem"><i class="el-icon-circle-plus-outline"></i></el-button>
      <WorkExpEditor :items="workExp"/>
    </li>
    <li v-if="currentInx === 5">
    <h1>Education Experience</h1>
     <el-button type="primary"  class="add-button" @click="addEducationItem"><i class="el-icon-circle-plus-outline"></i></el-button>
    <SingleInputEditor :items="studyExp" :labels="{school:'学校',duration:'时间',degree:'学位'}"/>
    </li>
    <li v-if="currentInx === 6">
    <h1>Award</h1>
    <el-button type="primary"  class="add-button" @click="addAwardItem"><i class="el-icon-circle-plus-outline"></i></el-button>
    <SingleInputEditor :items="awardExp" :labels="{award:'奖项'}"/>
    </li>
  </ol>
   </div>
</template>
<script>
import ProfileEditor from './ProfileEditor'
import WorkExpEditor from './WorkExpEditor'
import SingleInputEditor from './SingleInputEditor'
import ProjectEditor from './ProjectExpEditor'
export default {
  name: "Editor",
  components:{
    WorkExpEditor,
    ProfileEditor,
    SingleInputEditor,
    ProjectEditor
  },
  data() {
    return {
      currentInx: 0,
      msg: [
        "个人信息",
        "联系方式",
        "项目经历",
        "职业技能",
        "职业经历",
        "教育经历",
        "获奖情况"
      ],
      icons: [
        "info",
        "phone",
        "project",
        "zhuanyejineng",
        "company",
        "education",
        "jiangbei"
      ],
      profile: {
        name: "",
        age: "",
        city: ""
      },
      workExp: [{company: "",content: "",duration: ""}],
      studyExp:[{school:"",duration:"",degree:""}],
      awardExp:[{award:''}],
      projectExp:[{project:'',details:''}]
    };
  },
  computed:{

  },
  methods: {
   addWorkItem() {
      this.workExp.push({ company: "", content: "", duration: "" });
    },
   addEducationItem() {
      this.studyExp.push({school:"",duration:"",degree:""});
    },
    addAwardItem(){
      this.awardExp.push({award:""})
    },
    addProjectItem(){
      this.projectExp.push({project:"",details:""})
    }
  }
};
</script>
<style lang="scss">
.editor {
  background-color: #fff;
  width: 38em;
  border-radius: 5px;
  margin: 20px 15px 15px 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
  height: 100%;
}
.tabs {
  display: flex;
  flex-direction: column;
  width: 9em;
  height: inherit;
  margin: 0;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  box-shadow: 2px 0px 6px rgba(0, 0, 0, 0.4);
  overflow: auto;
  li {
    padding: 12px;
    text-align: center;
    color: rgba(71, 155, 197, 0.7);
    position: relative;
    cursor: pointer;
    div {
      padding-top: 8px;
      color: inherit;
    }
    @media (max-width:1366px) {
      div {
      color: inherit;
      display: inline-block;
      width: 66px;
      }
    }
  }
  @media (max-width: 1366px) {
    li {
      padding: 7px 40.3px;
    }
  }
}
nav {
  height: 100%;
  float: left;
}
ol {
  height: 100%;
  padding: 1em;
  margin-left: 9em;
  overflow: auto;
  li {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    .add-button {
      width: 65px;
      min-height: 40px;
      align-self: flex-end;
      background-color: #1da496;
    }
    .delete-button {
      margin-bottom: 5px;
    }
  }
}
</style>

