<template>
  <div class="child">
      <p>我是子组件</p>
      <p>{{myMessage}}</p>
      <p>{{myNum}}</p>
      <input type="text" v-model="message">
      <p>{{computedNum}}</p>
      <p>{{myOther}}</p>
      <p>{{myValidator}}</p>
  </div>
</template>
<script>
  export default {
    name: "child",
    props: {
      //   子组件接收，必须以驼峰命名法
      myMessage: String,
      myNum: Number,
      myOther: [String, Boolean], //可以是string类型，或者布尔类型
      defaultNum: {
        required: false, //必须不必须
        default: 200 //默认为200
      },
      defaultObj: {
        required: false,
        // 对象/数组的默认值一定是一个函数
        default() {
          return {};
        }
      },
      myValidator: {
        required: false,
        // 自定义验证
        validator(val) {
          return val > 9;
        }
      }
    },
    //   子组件不能修改父组件传过来的数据,但是我们可以通过data来作为局部数据使用，或者使用computed计算出来一个便利的值来使用
    data() {
      return {
        message: this.myMessage //作为局部数据来使用，可以在组件内更改这个message，比如input
      };
    },
    computed: {
      computedNum() {
        return this.defaultNum + 1;
      }
    }
  };
</script>

