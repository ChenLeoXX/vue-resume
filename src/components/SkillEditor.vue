<template>
<div>
 <el-form v-for="(item,index) in items" :key="index">
     <el-form-item label="Skill-Name">
    <el-input v-model="item.skill"></el-input>
     </el-form-item>
     <el-slider v-model="item.value" style="display:block;"></el-slider>
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
      this.items.splice(index, 1); 
    }
}
}
</script>


