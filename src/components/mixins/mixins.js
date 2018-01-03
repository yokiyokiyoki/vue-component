const mixins = {
    created() {
        console.log('我是mixins里的created钩子函数')
    },
    methods: {
        conflicting() {
            console.log('我是mixins里的methods里的conflict方法')
        },
        bar() {
            console.log('bar')
        }
    }
}
export default mixins