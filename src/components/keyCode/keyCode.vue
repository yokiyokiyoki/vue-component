<template>
  <div class="keyCode">
      <input type="text" placeholder="回车按键修饰符13" @keyup.13="handler">
      <!-- 但是我们肯定记不住所有keyCode（13是keycode），所以vue提供了别名 -->
      <input type="text" placeholder="回车按键修饰符enter" @keyup.enter="handler">
  </div>
</template>
<script>
    export default {
      data() {
        return {};
      },
      methods: {
        handler() {
          console.log("回车事件");
        }
      }
    };
</script>

