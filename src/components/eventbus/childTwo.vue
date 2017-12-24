<template>
  <div class="childTwo">
    <p>我是兄弟组件2</p>
  </div>
</template>
<script>
  import bus from "./bus";
  export default {
    data() {
      return {
        msg: "兄弟组件2"
      };
    },
    mounted() {
      //订阅一个事件
      bus.$on("childOne", data => {
        console.log(data);
      });
    }
  };
</script>
