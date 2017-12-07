<template>
  <div class="filter">
      <div>{{message}}</div>
      <div>{{message|capitalize}}</div>
      <!-- 现在也支持v-bind表达式过滤 -->
        <span :title="message|capitalize">我是绑定在title的v-bind表达式过滤器</span>
  </div>
</template>
<script>
    export default {
      data() {
        return {
          message: "msg"
        };
      },
      filters: {
        //   首字母大写的过滤器
        capitalize: function(value) {
          if (!value) return "";
          value = value.toString();
          return value.charAt(0).toUpperCase() + value.slice(1);
        }
      }
    };
</script>
