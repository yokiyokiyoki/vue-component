<template>
  <div class="prop">
      <!-- 字面量语法，kebab-case写法 -->
      <child my-message='hello'></child>
  </div>
</template>
<script>
    //引入子组件
    import child from "./child.vue";
    export default {
      components: {
        child //注册子组件
      }
    };
</script>
