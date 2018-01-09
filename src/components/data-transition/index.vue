<template>
  <div class="data-transition">
      <p>vue过渡系统提供了很多进入离开和列表的动效，对于对于数据本身的特性也有</p>
      <p>数字的运算，颜色的变化，元素的大小和其他属性等等</p>
      <p>主要是使用呢tween.js动画库</p>
      <numComponent />
  </div>
</template>
<script>
    const numComponent = () => import("./number.vue");
    export default {
      components: {
        numComponent
      }
    };
</script>

