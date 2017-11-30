<template>
  <div class="bind">
    <!-- 在dom元素上动态绑定数据和监听事件 -->
    <a v-bind:href="href">动态绑定百度链接</a>
    <!-- 一般简写成下面这样,语法糖 -->
    <a :href="href">动态绑定百度链接</a>
    <button v-on:click="handler">按钮点击事件</button>
    <!-- 监听事件一般写成下面这样 -->
    <button @click="handler">按钮点击事件</button>
    <!-- 如果想要传递参数 -->
    <button @click="handlerArg('传递了参数')">传递了参数的点击事件</button>
    <!-- 如果又想要传递参数，又想要获得原生事件 -->
    <button @click="handlerArgAndEvent('传递了参数和原生事件', $event)">传递了参数和原生事件的点击事件</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        href: "www.baidu.com"
      };
    },
    methods: {
      handler() {
        alert(11);
        //也可以直接写handler（event）,没有event，如果上面没有传参数，默认参数是事件
        console.log(event)
      },
      handlerArg(arg) {
        // 也能写到event,但是不推荐,因为不像下面那样event想怎么写就怎么写
        console.log(arg, event)
      },
      handlerArgAndEvent(arg, e) {
        console.log(arg, e)
      }
    }
  };

</script>
