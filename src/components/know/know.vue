<template>
  <div class="know">
        <div>1.输出的是字符串：{{rawHtml}}</div>
        <div>2.用v-html指令：<span v-html="rawHtml"></span></div>
        <div>3.{{name}}</div>
        <div>
            4.v-model可以双向绑定
            <input type="text" v-model="name">
        </div>
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

