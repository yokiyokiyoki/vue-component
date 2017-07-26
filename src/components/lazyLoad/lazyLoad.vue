<template>
  <div class="lazyLoad">
    <div style="height:60px;" v-for="i in arr" :key="i">{{i}}</div>
    <svg class="circular" viewBox="25 25 50 50" v-if='show'>
      <circle class="path" cx="50" cy="50" r="20" fill="none" />
    </svg>
  </div>
</template>
<script>
  import '@/assets/less/lazyLoad.less'
  import dom from '@/utils/dom'
  export default {
    data() {
      return {
        arr: [1],
        ticking: false,
        show: false
      }
    },
    methods: {
      onScroll() {
        let vm = this
        if (!vm.ticking) {
          requestAnimationFrame(vm.realFunc);
          vm.ticking = true;
        }
      },
      realFunc() {
        let vm = this
        // do something...
        if (vm.$el.scrollHeight <= vm.$el.clientHeight + vm.$el.scrollTop) {
          console.log(vm.$el.scrollHeight, vm.$el.clientHeight)
          vm.arr.push(1)
        }
        console.log("Success" + vm.arr.length);
        vm.ticking = false;
      },

    },
    mounted() {
      let vm = this
      dom.on(vm.$el, 'scroll', vm.onScroll)
    },
    beforeDestroy() {
      let vm = this
      dom.off(vm.$el, 'scroll', vm.onScroll)
    }
  }

</script>
