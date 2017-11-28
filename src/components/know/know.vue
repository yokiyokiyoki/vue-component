<template>
  <div class="know">
        <!-- 双括号文本差值数据绑定 -->
        <!-- 但是输入的只能是字符串，想要原样输出html，必须用指令v-html -->
        <div>1.rawHtml输出的是字符串：{{rawHtml}}</div>
        <div>2.rawHtml用v-html指令：<span v-html="rawHtml"></span></div>
        <div>3.name：{{name}}</div>
        <div>
            4.v-model可以双向绑定，绑定的是name
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

