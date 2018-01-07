<template>
   <div class="editor">
        <ul class="tabs">
            <li class="active">
           <svg class="icon svg-active" aria-hidden="true">
              <use xlink:href="#icon-info"></use>
          </svg>
          <div>Infomation</div>
          </li>
          <li class="">
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-phone"></use>
          </svg>
           <div>Contact</div>
          </li>
          <li>
         <div class="item">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-project"></use>
          </svg>
          <div>Projects</div>
         </div>
          </li>
          <li>
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-company"></use>
          </svg>
          <div>Company</div>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-education"></use>
          </svg>
          <div>Education</div>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jiangbei"></use>
          </svg>
          <div>Award</div>
          </li>
        </ul>  
   <div class="type">
            1
   </div>
   </div>
</template>
<script>
export default {
  name: "Editor",
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.editor {
  background-color: #fff;
  width: 38em;
  border-radius: 5px;
  margin: 20px 15px 15px 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
  height:100%;
  border:1px solid red;
}
.tabs{
  float:left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 10em;
  height:inherit;
  margin:0;
  background: #fff;
  border-radius: 5px;
  box-shadow: 3px 0px 6px rgba(0, 0, 0, 0.4);
  overflow:auto;
  li{
    padding:14px 40.3px;
    text-align:center;
    color:#B5C1C7;
    position:relative;
    cursor:pointer;
    div{
      padding-top:8px;
      color:inherit;
    }
  }
}
.type{
  margin-left: 10em;
}
</style>

