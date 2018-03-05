<template>     
      <div class="preview">
        <section class="profile-left">
          <AvatarUploader class="avatar"/>
          <div class="info">
              <h1>{{resume.profile.name}}</h1>
              <p>{{resume.profile.title}}</p>
              <div class="city">
                <svg class="icon" style="font-size:25px;">
                <use xlink:href="#icon-location"></use>
                </svg>
              {{resume.profile.city}}
              </div>
              <ul class="person clearfix">
                <li>
              <p>性别</p>
              <p>{{resume.profile.sex}}</p>
                </li>
                <li>
              <p>年龄</p>
              <p>{{resume.profile.age}}</p>
                </li>
                <li>
              <p>学位</p>
              <p>{{resume.profile.degree}}</p>
                </li>
              </ul>
              <ul class="contact">
                  <h2>CONTACT</h2>
                <li v-for="item in [0,1,2,3,4]" :key="item">
                  <svg class="icon" :style="`font-size:25px;fill:${svgColor[item]};`">
                    <use :xlink:href="`#icon-${icons[item]}`"></use>
                  </svg>       
                  <span>{{resume.contact[icons[item]]}}</span>
                </li>                            
              </ul>
          </div>
        </section>
        <section class="details">
          <h2>职业技能</h2>
            <ul class="ability">
              <li v-for="(item,index) in resume.ability" :key="index">
                <span class="skill-name">{{item.skill}}</span>
                <span class="skill-line">
                  <span class="skill-bg" :style="[{width:`${item.value}%`,background:`${item.color}`}]"></span>
                </span>
                <span>{{item.value+'%'}}</span>
              </li>
            </ul>
            <h2>项目经历</h2>
            <ul class="work" v-if="resume.projectExp.length>0">
              <li v-for="(item,index) in resume.projectExp" :key="index">
                <div class="project">{{item.project}}</div>
                <div class="workcontent">{{item.details}}</div>
              </li>
            </ul>
            <h2>工作经历</h2>
            <ul class="work" v-if="resume.workExp.length>0">
              <li v-for="(item,index) in resume.workExp" :key="index">
                <span class="project">{{item.company}}</span>
                <div class="time-stamp">
                  <span>{{(item.time)}}</span>
                </div>
                <div style= "margin-top:10px;" class="workcontent">{{item.details}}</div>
              </li>
            </ul>
              <h2>教育经历</h2>
              <ul class="work">
              <li v-for="(item,index) in resume.studyExp" :key="index">
                <span class="project">{{item.school}}</span>
                <div class="time-stamp">
                  <span>{{(item.duration)}}</span>
                </div>
              </li>
              </ul>
              <h2>获奖荣誉</h2>
              <ul v-if="resume.awardExp.length>0">
                <li v-for="(item,index) in resume.awardExp" :key="index" class="award"><img src="../../static/award.png" alt="">{{item.award}}</li>
              </ul>
        </section>
      </div>
</template>

<script>
import AvatarUploader from "./AvatarUploader"
export default {
  name: "Preview",
  props:["resume"],
  data() {
      return {
          svgColor:['tan','navy','green','black','gold'],//svg颜色
          icons:['phone1','email','wechat','github','blog'],//svg图标名称
      }
  },
  methods:{
  },
  components:{
    AvatarUploader
  }
};
</script>

<style lang="scss">
.preview {
  font-family:'lucida Sans', 'lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin:20px 15px 15px 20px;
  border-radius: 5px;  
  flex: 1;
  background:#ececec;
  box-shadow: 0 3px 6px  rgba(0,0,0,0.4);
  display: flex;
  align-items: stretch;
}
.profile-left{
  display: flex;
  flex-direction: column;
  padding-top:16px;
  padding-bottom:16px;
  min-width:300px;
  height: 100%;
}

.info{
  text-align: center;
  h1{
    margin-top:16px;
  }
  p{
    margin-top:16px;
    font-size:20px;
  }
  li{
    margin-top:8px;
  }
 .city{
   margin-top:8px;
   font-size:16px;
 }
}
.person{
   margin-top:8px;
   border-top:1px solid gray;
   border-bottom:1px solid gray;
   li{
     margin:0;
     width:33.3333%;
     float:left;
     p{
       margin-top:8px;
     }
   }
 }
 .contact{
   display:flex;
   flex-direction: column;
   align-items: flex-start;
   li{
     margin:10px 25px;
     @media (max-width:1366px) {
       margin:5px 25px;
     }
   }
   h2{
     align-self: center;
     margin-top:8px;
   }
 }
.avatar{
  margin:0 auto;
}
.details{
  flex:1;
  margin:10px 0px 10px 0px;
  background:rgb(245, 246, 247);
  overflow-y: scroll;
  h2{
    padding:4px;
    border-bottom:2px solid rgb(212, 212, 212);
    margin-top:10px;
  }
  .work{
    li{
      margin:10px;
      .project{
          margin:8px;
          color:#0093ff;
          font-size:20px;
          font-weight: bold;
      }
      .time-stamp{
        color:red;
        display: inline-block;
        text-align: right;
        float:right;
      }
      .workcontent{
        text-align: justify;
        word-wrap: break-word;
        font-size:16px;
        white-space: pre-wrap;
      }
    }
  }
}
.ability{
  li{
    margin-left:10px;
    margin-top:16px;
    .skill-line{
    display: inline-block;
    position: relative;
    width:70%;
    height: 7px;
    background: #d9d9d9;
    margin-left:16px;
    margin-right:8px;
    @media (max-width:1366px) {
      width:60%;
    }
    }
    .skill-name{
      display:inline-block;
      width:85px;
      overflow:hidden;
      color:#0093ff;
      font-weight: bold;
      text-align: center;
      vertical-align: middle;
    }
    .skill-bg{
      display: inline-block;
      position: absolute;
      height: 7px;
    }
  }
}
.award{
  margin:15px;
  font-size:20px;
  color:goldenrod;
  img{
    vertical-align: text-bottom;
    margin-right:16px;
  }
}
.clearfix::after{
  content:'';
  display:block;
  clear:both;
}
</style>
