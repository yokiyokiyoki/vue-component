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
      <!-- v-if可以用template，v-show不可以，用于判断一个整体 -->
      <template v-if="show">
          <div>我是template的整体1</div>
          <div>我是template的整体2</div>
      </template>
      <div v-else>template不显示就是我了</div>
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

