<template>
  <div class="sync">
    <p>我是子组件2</p>
    <p>“双向绑定”——有时候我们父组件改变了数据，传递给子组件的数据响应也变化，而子组件改变了数据，父组件的数据也响应变换。</p>
    <p>vue1中已经取消了双向绑定，原因是其破坏了单向数据流，debug的时候你不会知道什么时候父组件的状态也跟着变化了</p>
    <p>但是这里的“双向绑定”是假的，只是自定义事件的语法糖。这样可以避免你在父组件的dom监听过多事件（实际上语法糖拓展了这一步）</p>
    <p>我是父组件传递过来的数据{{num}}</p>
    <button @click="addNum">增加数字</button>    
  </div>
</template>
<script>
    export default {
      methods: {
        addNum() {
          // 显式地触发更新事件
          this.$emit("update:num", this.num + 1);
        }
      },
      props: {
        num: {
          type: Number,
          default: 0
        }
      }
    };
</script>

