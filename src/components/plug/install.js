const MyPlug = {}
MyPlug.install = function (Vue, opt = {}) {
    //全局方法
    Vue.globalMethods = function () {
        console.log('我是全局方法')
    }
    //资源：指令/过滤器等
    Vue.directive('globalDirective', function (el, binding, vnode) {
        el.style.backgroundColor = binding.value
    })
    //混合对象
    Vue.mixin({
        created() {
            console.log('global的mixin')
        }
    })
    //添加实例方法
    Vue.prototype.$myMethods = function () {
        console.log('实例方法')
    }
}
export default MyPlug;