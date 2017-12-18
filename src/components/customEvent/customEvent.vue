<template>
  <div class="customEvent">
    <span>我是父组件</span>
    <child ></child>
  </div>
</template>
<script>
  import child from "./child.vue";
  export default {
    components: {
      child
    }
  };
</script>

