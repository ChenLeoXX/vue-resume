<template>

      <div>
        <el-form>
          <el-form-item label="姓名">
            <el-input v-model="profile.name"></el-input>
           </el-form-item>
          <el-form-item label="性别">
            <el-input v-model="profile.sex"></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="profile.age"></el-input>
          </el-form-item>
          <el-form-item label="城市">
            <el-input v-model="profile.city"></el-input>
          </el-form-item>
        </el-form>
      </div>
</template>
<script>
export default {
  props:['profile']
}
</script>

