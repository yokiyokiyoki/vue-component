<template>
  <div class="keyCode">
      <input type="text" placeholder="回车按键修饰符13" @keyup.13="handleEnter">
      <!-- 但是我们肯定记不住所有keyCode（13是keycode），所以vue提供了别名 -->
      <input type="text" placeholder="回车按键修饰符enter" @keyup.enter="handleEnter">
      <input type="text" placeholder="退格和删除按键修饰符" @keyup.delete="handleDelete">
      <input type="text" placeholder="Esc按键修饰符" @keyup.esc="handlerEsc">
      <input type="text" placeholder="空格按键修饰符" @keyup.space="handleSpace">
      <input type="text" placeholder="方向键up按键修饰符" @keyup.delete="handleUp">
      <input type="text" placeholder="方向键down按键修饰符" @keyup.delete="handleDown">
      <input type="text" placeholder="方向键left按键修饰符" @keyup.delete="handleLeft">
      <input type="text" placeholder="方向键right按键修饰符" @keyup.delete="handleRight">
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
        console.log("方向键Left");
      },
      handleDown() {
        console.log("方向键Left");
      }
    }
  };
</script>

