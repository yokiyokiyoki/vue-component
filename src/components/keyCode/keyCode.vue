<template>
  <div class="keyCode">
      <input type="text" placeholder="回车按键修饰符13" @keyup.13="handleEnter">
      <!-- 但是我们肯定记不住所有keyCode（13是keycode），所以vue提供了别名 -->
      <input type="text" placeholder="回车按键修饰符enter" @keyup.enter="handleEnter">
      <input type="text" placeholder="退格和删除按键修饰符" @keyup.delete="handleDelete">
      <input type="text" placeholder="Esc按键修饰符" @keyup.esc="handlerEsc">
      <input type="text" placeholder="空格按键修饰符" @keyup.space="handleSpace">
      <input type="text" placeholder="方向键up按键修饰符" @keyup.up="handleUp">
      <input type="text" placeholder="方向键down按键修饰符" @keyup.down="handleDown">
      <input type="text" placeholder="方向键left按键修饰符" @keyup.left="handleLeft">
      <input type="text" placeholder="方向键right按键修饰符" @keyup.right="handleRight">
       <!-- KeyboardEvent.key 暴露的任意有效按键名转换为 kebab-case 来作为修饰符 -->
      <input type="text" placeholder="PageDown按键修饰符" @keyup.page-down="onPageDown">
      <!-- 另外可全局自定义按键修饰符的名字，但是必须按照keycode，我在main.js定义了Vue.config.keyCodes.f1 = 112 -->
      <input type="text" placeholder="F1按键修饰符" @keyup.f1="handleF1">
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    methods: {
      handleEnter() {
        console.log("回车事件");
      },
      handleDelete() {
        console.log("退格和删除事件");
      },
      handleEsc() {
        console.log("Esc事件");
      },
      handleSpace() {
        console.log("空格事件");
      },
      handleLeft() {
        console.log("方向键Left");
      },
      handleRight() {
        console.log("方向键Right");
      },
      handleUp() {
        console.log("方向键Up");
      },
      handleDown() {
        console.log("方向键Down");
      },
      onPageDown() {
        console.log('page-down按键事件，只有在$event.key === "PageDown"才生效');
      },
      handleF1() {
        console.log("自定义按键，f1");
      }
    }
  };
</script>

