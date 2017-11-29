<template>
  <div class="bind">
    <!-- 在dom元素上动态绑定数据和监听事件 -->
    <a v-bind:href="href">动态绑定百度链接</a>
    <!-- 一般简写成下面这样,语法糖 -->
    <a :href="href">动态绑定百度链接</a>
    <button v-on:click="handler">按钮点击事件</button>
    <!-- 监听事件一般写成下面这样 -->
    <button @click="handler">按钮点击事件</button>
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
      }
    }
  };
</script>
