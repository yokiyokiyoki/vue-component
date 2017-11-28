<template>
  <div class="know">
      <!-- 输出的是字符串 -->
      <div>输出的是字符串：{{rawHtml}}</div>
        <div>用v-html指令：<span v-html="rawHtml"></span></div>
  </div>
</template>
<script>
    export default {
      data() {
        //在组件里面data必须返回函数
        return {
          rawHtml: "<span style='color:red'>我是包含html的标签</span>",
          name: "纯data"
        };
      }
    };
</script>

