// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'normalize.css'
import './assets/reset.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import AV from 'leancloud-storage'
Vue.use(ElementUI)
Vue.config.productionTip = false
var  APP_ID = "PIiqPQ5879gouVStL4ftSX66-gzGzoHsz"
var  APP_KEY = "dRoRDbDY98PujXqQ2mLCGoUC"
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})