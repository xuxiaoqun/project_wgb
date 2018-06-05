// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import qs from 'qs'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Vue.prototype.Host = '/api'
Vue.use(ElementUI);

Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config.method);
  if(config.method == 'post'){
    console.log(config.data);
    //config.data = qs.stringify(config.data);
    console.log(config.data);
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
