<template>
  <div class="eventbus">
    <p>兄弟组件间通信传递，使用eventbus</p>
    <child-one />
    <child-two />
  </div>
</template>
<script>
  import childOne from "./childOne.vue";
  import childTwo from "./childTwo.vue";
  export default {
    components: {
      childOne,
      childTwo
    }
  };
</script>

