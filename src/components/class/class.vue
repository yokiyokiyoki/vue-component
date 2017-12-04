<template>
  <div class="class">
      <button @click="changeClass">改变类名</button>
      <!-- v-bind:class指令可以和普通class共存 -->
      <div class="bold" :class="{green:true}">动态绑定绿色类名</div>
      <div class="bold" :class="{size:active}">动态绑定绿色类名</div>
      <div class="bold" :class="classObj">computed动态绑定绿色类名</div>
      <!-- 除了使用对象,还可以使用数组 -->
  </div>
</template>
<script>
    export default {
      data() {
        return {
          active: false
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


