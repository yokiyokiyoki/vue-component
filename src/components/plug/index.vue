<template>
  <div class="plug">
      <p>插件，通常会为Vue添加全局功能</p>
      <p>插件应该有个公开方法install，这个方法第一个参数是Vue构造器，第二个参数是一个可选的选项对象</p>
      <ul>
          <li>添加全局方法或者属性</li>
          <li>添加全局资源resource：指令/过渡/过滤器</li>
          <li>全局混合对象mixins，添加一些组件选项</li>
          <li>添加vue实例方法，通过挂vue的原型上实现</li>
      </ul>
      <p v-globalDirective='color'>11</p>
  </div>
</template>
<script>
    import Vue from "vue";
    export default {
      data() {
        return {
          color: "yellow"
        };
      },
      created() {
        Vue.globalMethods();
      },
      mounted() {
        this.$myMethods();
      }
    };
</script>

