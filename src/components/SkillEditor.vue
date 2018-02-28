<template>
<div>
 <el-form v-for="(item,index) in items" :key="index">
     <el-form-item label="Skill-Name">
    <el-input v-model="item.skill"></el-input>
     </el-form-item>
     <el-slider v-model="item.value"></el-slider>
     <el-button type="danger" class="delete-button" @click="removeItem(index)"><i class="el-icon-delete"></i></el-button>
 </el-form>
</div>
</template>
<script>
export default {
  name:'SkillEditor',
  props:['items'],
  data(){
      return {
         skillName:'Skill-name'
      }
  },
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
}
}
</script>


