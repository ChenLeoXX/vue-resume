<template>
<div>
      <h1>About me</h1>
      <div>
        <el-form>
          <el-form-item label="Name">
            <el-input v-model="profile.name"></el-input>
           </el-form-item>
          <el-form-item label="Title">
            <el-input v-model="profile.title"></el-input>
          </el-form-item>
          <el-form-item label="Gender">
            <el-input v-model="profile.sex"></el-input>
          </el-form-item>
          <el-form-item label="Age">
            <el-input v-model="profile.age"></el-input>
          </el-form-item>
          <el-form-item label="City">
            <el-input v-model="profile.city"></el-input>
          </el-form-item>
        </el-form>
      </div>
</div>
</template>
<script>
export default {
  props:['profile']
}
</script>

