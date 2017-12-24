<template>
  <div class="childOne">
    <p>我是兄弟组件1</p>
    <button @click='deliver'>发布事件</button>
  </div>
</template>
<script>
  import bus from "./bus.js";
  export default {
    data() {
      return {
        msg: "兄弟组件1"
      };
    },
    methods: {
      deliver() {
        //发布一个事件
        bus.$emit("childOne", this.msg);
      }
    }
  };
</script>

