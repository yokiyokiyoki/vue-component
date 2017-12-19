<template>
  <div class="customEvent">
    <span>我是父组件</span>
    <!-- 监听子组件的事件,也可以native监听子组件根元素 -->
    <child @changeNum="changeNum" @click.native="clickNative($event)"></child>
    <!-- 父子组件双向传递，利用了语法糖，还是要在子组件内显示的触发emit -->
    <sync-child v-bind:num.sync='num'></sync-child>
    <!-- 上面那个表达式会被编译为下面这样，可以把注释放开 -->
    <!-- <sync-child v-bind:num='num' v-on:update:num="val=>num=val"></sync-child> -->
    <model v-model="modelNum"></model>
  </div>
</template>
<script>
  import child from "./child.vue";
  import syncChild from "./sync.vue";
  import model from "./model.vue";
  export default {
    components: {
      child,
      syncChild,
      model
    },
    methods: {
      changeNum(num) {
        // 获取子组件传过来的参数
        console.log(num);
      },
      clickNative(e) {
        // 因为监听的是根元素，但由于是冒泡，所以其下子元素也会监听到
        console.log(e);
      }
    },
    data() {
      return {
        num: 1,
        modelNum: 0
      };
    },
    watch: {
      modelNum(val, oldVal) {
        console.log("观察一下变化" + val);
      }
    }
  };
</script>

