const MyPlug = {}
MyPlug.install = function (Vue, opt = {}) {
    Vue.globalMethods = function () {
        console.log('我是全局方法')
    }
}
export default MyPlug;