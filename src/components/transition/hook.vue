<template>
  <div class="hook">
      <p>过渡组件可以使用JavaScript钩子函数</p>
      <button @click='show=!show'>切换状态</button>
      <!-- 使用css等于false，vue会跳过css的检测，这样过渡的时候可以避免css的影响 -->
      <transition
      v-bind:css='false' 
      @before-enter="beforeEnter"
      @enter='enter'
      @after-enter='afterEnter'
      @before-leave='beforeLeave'
      @leave='leave'
      @after-leave='afterLeave'>
          <p v-if='show'>Done</p>
      </transition>
      <div style="height:100px;"></div>
  </div>
</template>
<script>
    import Velocity from "velocity-animate";
    export default {
      data() {
        return {
          show: false
        };
      },
      methods: {
        afterEnter(el) {},
        beforeLeave(el) {},
        afterLeave(el) {},
        beforeEnter(el) {
          el.style.opacity = 0;
          el.style.transformOrigin = "left";
        },
        // done是必须的，不然enter和leave会被同步调用，立刻完成
        enter(el, done) {
          Velocity(el, { opacity: 1, fontSize: "1.4em" }, { duration: 300 });
          Velocity(el, { fontSize: "1em", complete: done });
        },
        leave(el, done) {
          Velocity(el, { translateX: "15px", rotateZ: "15deg" }, { duration: 300 });
          Velocity(el, { rotateZ: "100deg" }, { loop: 2 });
          Velocity(el, {
            rotateZ: "45deg",
            translateY: "30px",
            translateX: "30px",
            opacity: 0,
            complete: done
          });
        }
      }
    };
</script>
