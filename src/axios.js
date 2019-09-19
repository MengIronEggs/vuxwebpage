import Vue from 'vue'
import axios from 'axios';
import {LoadingPlugin} from 'vux';
Vue.use(LoadingPlugin);
function startLoading() {
    Vue.$vux.loading.show({
        text: 'Loading'
    })
}
function endLoading() {
    Vue.$vux.loading.hide();
}

// const Text = function(){
//     console.log('12342342');
// }

const Axios = axios.create({
    baseURL: 'http://192.168.1.136:8086/monitor/',
    // baseURL: 'https://mt.guoanfamily.com/monitor/',
    // timeout: 10000,
})

Axios.interceptors.request.use(config => {
        // if (config.url != "/GetLogin" && localStorage.token != undefined) {
        //         config.headers.Authorization = 'Bearer:' + localStorage.token;
        //     }
        startLoading();
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

Axios.interceptors.response.use(
    res => {
        endLoading();
        return Promise.resolve(res.data);
    },
    error => {
        endLoading();
        return Promise.reject(error);
    }
);
// 将 Axios 实例添加到Vue的原型对象上
export default {
    install(Vue) {
        Object.defineProperty(Vue.prototype, '$Axios', {
            value: Axios
        });
        // 挂载公共方法
        // Object.defineProperty(Vue.prototype, '$Text',{
        //     value: Text
        // });
    }
};