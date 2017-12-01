<template>
  <div class="keyCode">
      <input type="text" placeholder="回车按键修饰符13" @keyup.13="handlerEnter">
      <!-- 但是我们肯定记不住所有keyCode（13是keycode），所以vue提供了别名 -->
      <input type="text" placeholder="回车按键修饰符enter" @keyup.enter="handlerEnter">
      <input type="text" placeholder="退格和删除按键修饰符" @keyup.delete="handlerDelete">
  </div>
</template>
<script>
    export default {
      data() {
        return {};
      },
      methods: {
        handlerEnter() {
          console.log("回车事件");
        },
        handlerDelete() {
          console.log("退格和删除事件");
        }
      }
    };
</script>

