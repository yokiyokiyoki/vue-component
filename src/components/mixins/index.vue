<template>
  <div class="mixins">
      <p>混合mixins,分发组件中可复用功能</p>
      <p>混合对象可以包括任意组件选项。当组件使用混合对象时，所有混合对象的选项都将被混入该组件本身的选项中。</p>
      <p>如果混合对象内和组件内选项一样，那么合并策略是，同名钩子函数会被混合成一个数组</p>
      <p>值是对象的话将会混合为同一个对象，如果对象键名冲突的时候，去组键对象的键值对，（比如methods）</p>
  </div>
</template>
<script>
  import myMixins from "./mixins.js";
  export default {
    // 是一个数组，可以混入多个不同的对象
    mixins: [myMixins],
    created() {
      console.log("我是组件里的created钩子函数");
    },
    mounted() {
      this.conflicting();
      this.foo();
      this.bar();
    },
    methods: {
      conflicting() {
        console.log("我是mixins里的methods里的conflict方法");
      },
      foo() {
        console.log("foo");
      }
    }
  };
</script>

