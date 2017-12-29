<template>
  <div class="animate">
      <p>使用<a href="https://daneden.github.io/animate.css/">animation.css</a></p>
      <p>可以通过props的enter-class、enter-active-class、enter-to-class、leave-class、leave-active-class、leave-to-class自定义各种类名</p>
      <p>主要是也是enter-active-class、leave-active-class</p>
      <p>用法是类名加个animated先，后面再跟他用的动画类名</p>
      <button @click="changeShow">启动动画</button>
      <transition enter-active-class='animated bounce' leave-active-class='animated flash'>
          <p v-if='show'>animate动画</p>
      </transition>
  </div>
</template>
<script>
    export default {
      data() {
        return {
          show: false
        };
      },
      methods: {
        changeShow() {
          this.show = !this.show;
        }
      }
    };
</script>

