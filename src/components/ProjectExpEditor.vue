<template>
  <div>
  <el-form v-for="(item,index) in items" :key="index">
      <el-form-item label="项目名称">
    <el-input v-model="item.project"></el-input>
  </el-form-item>
  <el-form-item label="项目细节">
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
  name:'ProjectEditor',
  props:['items'],
  methods:{
      removeItem(index) {
      this.items.splice(index, 1);
    }
  }
}
</script>

