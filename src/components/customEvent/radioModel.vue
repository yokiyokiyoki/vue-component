<template>
  <div class="checkModel">
      <p>我是子组件4（自定义组件其他表单）</p>
      <p>因为input输入框默认传的是value，事件默认是input</p>
      <p>但是input其他type像单选的checkbox和radio，他们的选中值不是value，而是checked，事件是change而不是input</p>
      <p>vue提供model属性，来更改默认传的prop和event</p>
      <input type="checkbox" @change="changeListener($event)" >正面
  </div>
</template>
<script>
    export default {
      data() {
        return {};
      },
      model: {
        prop: "checked",
        event: "change"
      },
      props: {
        //显式声明props
        checked: {
          type: Boolean
        },
        value: String //这样value可以做其他事啦
      },
      methods: {
        changeListener(e) {
          console.log(e);
        }
      }
    };
</script>

