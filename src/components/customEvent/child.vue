<template>
  <div class="child">
      <span>我是子组件1</span>
      <span>数字显示{{num}}</span>
      <button @click="incrementNum">数字增加</button>
      <button @click="decrementNum">数字减少</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        num: 0
      };
    },
    methods: {
      incrementNum() {
        this.num++;
        //   向外部发送时间
        this.$emit("changeNum", this.num);
      },
      decrementNum() {
        this.num--;
        this.$emit("changeNum", this.num);
      }
    }
  };
</script>

