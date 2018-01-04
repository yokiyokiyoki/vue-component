<template>
  <div class="hook">
      <p>过渡组件可以使用JavaScript钩子函数</p>
      <transition>
          <p v-if='show'></p>
      </transition>
  </div>
</template>
<script>
    export default {
      data() {
        return {
          show: false
        };
      }
    };
</script>
