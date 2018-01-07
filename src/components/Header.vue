<template>
  <header>
    <div class="logo" stlye="font-family:font-family: 'Shadows Into Light Two', cursive;">
      <span>QuickResumer</span>
    </div>
    <div class="user">
      <button class="login"><a href="">登录</a></button>
      <button class="sign-up"><a href="">注册</a></button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
   
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.logo{
  font-size:26px;
  font-style: italic;
  span{ 
width: 440px; 
color: #01E2C5; 
text-shadow: 0 1px 1px  green;

  }
}
header{
  background: #fff

  ;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  box-shadow: 0 3px 6px  rgba(0,0,0,0.2);
}
.login,.sign-up {
  color:white;
  border-radius: 4px;
  background: #1DA496;
  border:none;
  margin-left:10px;
  font-weight: bold;
  a{
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    
  }
   &:hover{
     background:rgb(97, 202, 167);
   }
}

</style>
