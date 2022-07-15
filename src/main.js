// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App'
import router from './router'

//引入axios
import axios from 'axios'

//全局属性配置：在任意组件内可以使用this.$http获取axios对象
Vue.prototype.$http = axios

//配置axios的全局基本路径
axios.defaults.baseURL='https://www.fastmock.site/mock/8b8eda9fe2d9ba334629c9ddd2a71464/pethome'

Vue.config.productionTip = false
//使用element-ui
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
