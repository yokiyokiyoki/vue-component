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

  .flash-enter-active,
  .flash-leave-active {
    transition: all 3s ease;
  }
  .flash-enter,
  .flash-leave-to {
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
    <animation />
    <p>多个元素的过渡。相同元素切换的话应该设置key特性，让vue区分，否则vue为了效率只会替换标签内部的内容。相同元素设置key应该是最佳实践</p>
    <p>相同元素如果transition里元素不加key做区分的话，那么只会替换元素内文字（这里是），然后就不会有过渡效果了。可以把key去掉试试</p>
    <button @click="isEditing=!isEditing">切换多个相同元素过渡</button>
    <p>1.但是这里有个问题，就是进入和离开被同时重绘了，这是transition的默认行为，进入/离开过渡同时发生</p>
    <transition name="flash">
      <button v-if="isEditing" key="save">
        Save
      </button>
      <button v-else key="edit">
        Edit
      </button>
    </transition> 
    <p>所以transition组件提供了mode特性</p>
    <p>mode='out-in'是旧元素先进行过渡，完成之后新元素过渡离开</p>
    <transition name="flash" mode='out-in'>
      <button v-if="isEditing" key="save">
        Save
      </button>
      <button v-else key="edit">
        Edit
      </button>
    </transition> 
    <p>mode='in-out'是新元素先进行过渡，完成之后当前元素过渡离开，这个其实不常用</p>
    <transition name="flash" mode='in-out'>
      <button v-if="isEditing" key="save">
        Save
      </button>
      <button v-else key="edit">
        Edit
      </button>
    </transition>
    <p>多个组件的过渡或者路由切换过渡同理</p>
    <hook /> 
  </div>
</template>
<script>
  const animation = () => import("./animation.vue");
  const hook = () => import("./hook.vue");
  export default {
    data() {
      return {
        fadeShow: false,
        bounceShow: false,
        isEditing: false
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
      animation,
      hook
    }
  };
</script>
