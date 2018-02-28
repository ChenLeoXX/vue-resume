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
         this.$confirm('此操作将删除此条目, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
         this.items.splice(index, 1);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
 },
 props:['items']
}
</script>

