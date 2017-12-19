<template>
  <div class="customEvent">
    <span>我是父组件</span>
    <!-- 监听子组件的事件 -->
    <child @changeNum="changeNum"></child>
  </div>
</template>
<script>
  import child from "./child.vue";
  export default {
    components: {
      child
    },
    methods: {
      changeNum(num) {
        // 获取子组件传过来的参数
        console.log(num);
      }
    }
  };
</script>

