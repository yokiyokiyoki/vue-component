<template>
  <div class="style">
      <div v-bind:style="{color:'red'}">动态绑定style</div>
      <div v-bind:style="styleObj">动态绑定style</div>
      <div v-bind:style="[styleObj,otherStyleObj]">数组语法动态绑定style</div>
  </div>
</template>
<script>
    export default {
      data() {
        return {
          // 可以直接绑定一个样式对象
          styleObj: {
            color: "red",
            fontSize: 30 + "px"
          },
          otherStyleObj: {
            backgroundColor: "black"
          }
        };
      }
    };
</script>

<style lang="less" scoped>
    .red {
      background: red;
    }
    .yellow {
      color: yellow;
    }
    .orange {
      color: orange;
    }
</style>

