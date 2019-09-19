export default class {

    constructor() {}

    install(Vue) {
        this.installPrototype(Vue);
        this.installFilter(Vue);
    }
    
    // 添加公共方法
    installPrototype(Vue){
        
    }
    // 添加vue过滤器
    installFilter(Vue) {
        Vue.filter('date-time-filter', function(time) {
            if (!time) {
                return "";
            }
            return new Date(time).Format("yyyy-MM-dd hh:mm");
        });
        Vue.filter('numFilter',function(value){
            let realVal = parseFloat(value).toFixed(2);
            return realVal;
        })
    }
}