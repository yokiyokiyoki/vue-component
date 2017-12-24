<template>
  <div class="eventbus">
    <p>兄弟组件间通信传递，使用eventbus</p>
    <child-one />
    <child-two />
    <p>不止兄弟，还可以祖孙n代传递信息</p>
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

