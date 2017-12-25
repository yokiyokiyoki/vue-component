<template>
  <div class="slot-layout">
      <div class="slot-header">
          <!-- 具名插槽 ,父组件作用域内可以使用名字指定 -->
          <slot name='header'>这段文字只有在父组件里没有指定slot为header，才会出现</slot>  
      </div>
      <div class="slot-main">
          <!-- 匿名slot，也就是默认插槽 -->
          <slot></slot>
      </div>
      <div class="slot-footer">
          <slot name='footer'>可以包含很复杂的结构</slot>
      </div>
  </div>
</template>
<script>
    export default {};
</script>
