<style lang="less" scoped>
  .fade-enter-active {
    // 贯穿整个插入dom时候的过渡
    transition: all 3s ease;
  }
  .fade-enter {
    //刚插入时候是0，到下一帧还移除这个类，就会变为1
    opacity: 0;
    //刚插入时候偏移是10px，到下一帧还移除这个类，就会变为偏移为0
    transform: translateX(10px);
  }
  .fade-leave-active {
    transition: all 2s ease;
  }
  .fade-leave-to {
    // 移除dom元素之后
    transform: translate(10px);
    opacity: 0;
  }

  //动画的话主要就active类名
  .bounce-enter-active {
    animation: bounce 0.5s;
  }
  //离开的时候翻转一下状态
  .bounce-leave-active {
    animation: bounce 1s reverse;
  }
  @keyframes bounce {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>

<template>
  <div class="transition">
    <p>在进入/离开过渡的过程中，共有6个class进行切换</p>
    <p>1.进入过渡即是指插入dom元素或者dom元素显示的时候。</p>
    <p>v-enter-active（贯穿整个过程，过渡完成后清除）包括v-enter（元素被插入时候生效，下一帧移除）和v-enter-to（元素被插入一帧后生效，在过渡完成后被移除）</p>
    <p>2.离开过渡即是指移除dom元素或者dom元素隐藏的时候。</p>
    <p>v-leave-active（贯穿整个过程，过渡完成后清除）包括v-leave（元素被移除时候生效，下一帧移除）和v-leave-to（元素被移除一帧后生效，在过渡完成后被移除）</p>
    <p>一般来说enter/leave-active可以用来定义过程时间，延迟和曲线函数(transition),其他四个类名都是用来定义位移透明度等</p>
    <p>如果类名不想要v-前缀，那么prop的name属性可以使用</p>
    <button @click="fade">淡入淡出的过渡transition</button>
    <transition name='fade'>
      <p v-if="fadeShow">淡入淡出的过渡</p>
    </transition>
    <button @click='bounce'>跳动动画animation</button>
    <transition name='bounce'>
      <p v-if="bounceShow">跳动动画</p>
    </transition>
  </div>
</template>
<script>
  const animation = () => import("./animation.vue");
  export default {
    data() {
      return {
        fadeShow: false,
        bounceShow: false
      };
    },
    methods: {
      fade() {
        this.fadeShow = !this.fadeShow;
      },
      bounce() {
        this.bounceShow = !this.bounceShow;
      }
    },
    components: {
      animation
    }
  };
</script>
