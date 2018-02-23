<template>
   <div>
  <el-form v-for="(item,index) in items" :key="index">
    <el-form-item label="公司">
    <el-input v-model="item.company"></el-input>
  </el-form-item>
      <el-form-item label="时间">
    <el-input v-model="item.time"></el-input>
  </el-form-item>
  <el-form-item label="工作内容">
    <el-input
  type="textarea"
  :rows="6"
  placeholder="请输入内容"
  v-model="item.details">
</el-input>
  </el-form-item>
  <el-button type="danger" class="delete-button" @click="removeItem(index)"><i class="el-icon-delete"></i></el-button>
    </el-form>
   </div>
</template>
<script>
export default {
 methods:{
    removeItem(index) {
      this.items.splice(index, 1);
    }
 },
 props:['items']
}
</script>

