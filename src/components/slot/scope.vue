<template>
  <div class="slot-scope">
      <p>有一种特殊的插槽，叫作用域插槽</p>
      <p>具名插槽和匿名只能满足你把他放在那个位置，你不能在父组件做出可重用的模板</p>
      <p>我们在子组件给slot传递数据，就像给组件传递prop一样</p>
      <p>就当做是传递prop</p>
      <p>作用域插槽也可以有具名和匿名</p>
      <slot text='我是给插槽传递数据的text属性' name='a'></slot>
      <slot :msg="msg"></slot>
  </div>
</template>
<script>
    export default {
      data() {
        return {
          msg: "hi,作用域插槽，也就是传递本组件的内容，给你在父组件随意组装 "
        };
      }
    };
</script>

