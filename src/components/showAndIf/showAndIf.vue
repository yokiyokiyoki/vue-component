<template>
  <div class="showAndIf">
      <button @click="changeShow">改变show的状态</button>
      <!-- if是选择性渲染dom元素，false的话页面会销毁这个元素的，但是开销就会比show大 -->
      <div v-if="show">
          当实例数据的show为true的时候我显示
      </div>
      <!-- v-else或者v-else-if 一定要紧跟v-if -->
      <div v-else>
          当实例数据的show为false的时候我显示
      </div>
      <div v-show="show">我是v-show，我只是通过display:none隐藏了</div>
  </div>
</template>
<script>
    export default {
      data() {
        return {
          show: true
        };
      },
      methods: {
        changeShow() {
          this.show = !this.show;
        }
      }
    };
</script>

