<template>
   <div>
       <div v-for="(item,index) in workExp">
  <el-form style="position:relative;">
    <el-form-item label="Company">
    <el-input v-model="item.company"></el-input>
  </el-form-item>
      <el-form-item label="Duration">
    <el-input v-model="item.time"></el-input>
  </el-form-item>
  <el-form-item label="Job Duties">
    <el-input
  type="textarea"
  :rows="6"
  placeholder="请输入内容"
  v-model="item.content">
</el-input>
  </el-form-item>
    </el-form>
 <el-button type="danger" class="delete-button" @click="removeWorkExp(index)"><i class="el-icon-delete"></i></el-button>
 </div>
   </div>
</template>
<script>
export default {
 methods:{
    removeWorkExp(index) {
      this.workExp.splice(index, 1);
    }
 },
 props:['workExp']
}
</script>

