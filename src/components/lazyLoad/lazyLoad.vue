<template>
  <div class="lazyLoad">
    <div style="height:60px;border:1px solid red" v-for="i in arr" :key="i">{{i}}</div>
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
        arr: [],
        ticking: false,
        show: false,
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        count: 2, //计数器,
        bus: new pubsub(),
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
          vm.show = true
          vm.arr.push(vm.data[vm.count], vm.data[vm.count + 1])
          vm.count += 2
          if (vm.count == vm.data.length) {
            vm.show = false
            dom.off(vm.$el, 'scroll', vm.onScroll)
          }
        }
        console.log("Success" + vm.arr.length);
        vm.ticking = false;
      },

    },
    mounted() {
      let vm = this
      // vm.arr = vm.data.slice(2, vm.data.length)
      vm.arr = vm.data.slice(0, 2)
      dom.on(vm.$el, 'scroll', vm.onScroll)
    },
    beforeDestroy() {
      let vm = this
      dom.off(vm.$el, 'scroll', vm.onScroll)
    }
  }

</script>
