import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入Axios
import Axios from './script/axios';
Vue.use(Axios);
//安装自定义组件
import GaPlugin from './script/GaPlugin';
Vue.use(new GaPlugin());
import Common from './script/common';
Vue.use(new Common());
//安装vux全局插件
import VuxRegister from './script/VuxRegister'
Vue.use(new VuxRegister()); 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
