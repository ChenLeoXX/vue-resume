<template>
<div> 
  <el-form  v-for="(item,index) in items" :key="index">
    <el-form-item v-for="name in keys " :label="labels[name] || name" :key="name">
    <el-input v-model="item[name]"></el-input>
  </el-form-item>
  <el-button type="danger" class="delete-button" @click="removeItem(index)"><i class="el-icon-delete"></i></el-button>
    </el-form>
 </div>
</template>
<script>
export default {
  name:'StudyExpEditor',
  props:['items','labels'],
  computed:{
    keys(){
      return Object.keys(this.items[0])
    }
  },
  methods:{
       removeItem(index) {
      this.items.splice(index, 1);
    }
  }
}
</script>

