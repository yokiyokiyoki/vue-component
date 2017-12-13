<template>
  <div class="child">
      <p>我是子组件</p>
      <p>{{myMessage}}</p>
  </div>
</template>
<script>
    export default {
      name: "child",
      props: {
        //   子组件接收，必须以驼峰命名法
        myMessage: String
      }
    };
</script>

