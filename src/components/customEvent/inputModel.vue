<template>
  <div class="inputModel">
      <p>我是子组件3(自定义组件输入框)</p>
      <p>所谓v-model的双向绑定，就是data里num绑定到了input上面（显示出了11），而后我们在input上面输入了其他，也会反映到data里面</p>
      <p>所以v-model实际上是绑定value和监听input事件的语法糖</p>
      <p>如果不监听input事件，把值再次赋值回去的话，充其量只算是单向绑定，即把data里的数据映射过来dom，但是dom不能反向改变data里的东西</p>
      <input type="text" v-bind:value="num" @input="inputListener($event)">
      <input type="text" v-model="num">
      <p>实际上我们自定义一个输入框组件，想让别人在父组件可以使用v-model的话，必须符合这两个条件1.prop是value 2.显式地触发input事件</p>
      <input type="text" :value='value' @input="emitInput($event)">
  </div>
</template>
<script>
  export default {
    methods: {
      inputListener(e) {
        this.num = e.target.value;
        console.log(this.num);
      },
      emitInput(e) {
        // 显式地input事件
        this.$emit("input", e.target.value);
      }
    },
    data() {
      return {
        num: 11
      };
    },
    props: {
      value: {
        type: String,
        default: "1"
      }
    }
  };
</script>

