<template>
  <div class="prop">
      <p>kebab-case写法</p>
      <!-- 字面量语法（无论写布尔值还是数字，都会变成string类型） -->
      <child my-message='hello'></child>
      <!-- v-bind动态Prop，即可以绑定实例中的数据，还有布尔值，num类型必须通过这种表达式 -->
      <child v-bind:my-num='1'></child>
      <child v-bind:my-other='true'></child>
      <child v-bind:default-num='100'></child>
      <child v-bind:default-obj='{a:1}'></child>
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
