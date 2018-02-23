<template>
      <div>
        <el-form>
          <el-form-item  v-for="(value,key) in items" :label="labels[key]" :key="key">
            <el-input v-model="items[key]"></el-input>
           </el-form-item>
        </el-form>                                                                                                                                                                                   
      </div>
</template>
<script>
export default {
  props:['items','labels']
}
</script>

