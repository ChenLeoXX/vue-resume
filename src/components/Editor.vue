<template>
   <div class="editor">
      <nav>
          <ul class="tabs">
            <li v-for="i in [0,1,2,3,4,5,6]" 
                :class="{active:currentInx === i}"
                @click='currentInx = i' :key>
           <svg :class="{svgActive:currentInx === i}" 
                 class="icon">
              <use :xlink:href="`#icon-${icons[i]}`"></use>
          </svg>
          <div>{{msg[i]}}</div>
          </li>
        </ul>  
      </nav> 
  <ol>
    <li v-if="currentInx === 0">
      <h1>About me</h1>
      <ProfileEditor :profile="profile"/>
    </li>
    <li v-if="currentInx === 1">
    <h1>Contact</h1>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    </li>
        <li v-if="currentInx === 2">
    <h1>About me</h1>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    </li>
        <li v-if="currentInx === 3">
    <h1>About me</h1>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    </li>
    <li v-if="currentInx === 4">
      <h1>Work Experence</h1>
      <el-button type="primary"  class="add-button" @click="addNew"><i class="el-icon-circle-plus-outline"></i></el-button>
      <WorkExpEditor :workExp="workExp"/>
    </li>
    <li v-if="currentInx === 5">
    <h2>About me</h2>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    </li>
        <li v-if="currentInx === 6">
    <h2>About me</h2>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    </li>
  </ol>
   </div>
</template>
<script>
import ProfileEditor from './ProfileEditor'
import WorkExpEditor from './WorkExpEditor'
export default {
  name: "Editor",
  components:{
    WorkExpEditor,
    ProfileEditor
  },
  data() {
    return {
      currentInx: 0,
      msg: [
        "Infomation",
        "Contact",
        "Projects",
        "Skill",
        "Company",
        "Education",
        "Award"
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
        city: "",
        title: ""
      },
      workExp: [{ company: "", content: "", duration: "" }]
    };
  },
  methods: {
    addNew() {
      this.workExp.push({ company: "", content: "", duration: "" });
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

