<template>
  <div class="class">
    <button @click="changeClass">改变类名</button>
    <!-- v-bind:class指令可以和普通class共存 -->
    <div class="bold" :class="{green:true}">对象动态绑定绿色类名</div>
    <div class="bold" :class="{size:active}">对象动态绑定绿色类名</div>
    <div class="bold" :class="classObj">对象computed动态绑定类名</div>
    <!-- 除了使用对象,还可以使用数组 -->
    <div :class="[greenClass,boldClass]">数组动态绑定类名</div>
    <!-- 可以用三元表达式 -->
    <div :class="[active?redClass:greenClass,boldClass]">数组动态绑定类名</div>
    <!-- 但是如果有很多判断条件的时候，三元表达式就会太繁琐，可以使用数组里面对象的形式来写 -->
    <div :class="[{red:active},boldClass]">数组动态绑定类名</div>

    <!-- 当在一个自定义组件上使用 class 属性时，可以直接使用class，它最终会定义到该组件的根元素     -->
    <!-- <my-component class="greenClass"></my-component> -->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: false,
        greenClass: {
          green: "green"
        },
        boldClass: {
          bold: "bold"
        },
        redClass: {
          red: "red"
        }
      };
    },
    methods: {
      changeClass() {
        this.active = !this.active;
      }
    },
    computed: {
      classObj() {
        return {
          green: this.active
        };
      }
    }
  };

</script>
<style>
  .red {
    color: red;
    /* 还可以加上动画 */
    transition: all 1s;
  }

  .green {
    color: green;
    transition: all 1s;
  }

  .bold {
    font-weight: 700;
  }

  .size {
    font-size: 30px;
    transition: all 1s;
  }

</style>
