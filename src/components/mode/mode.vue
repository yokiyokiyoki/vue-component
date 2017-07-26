<template>
  <div class="mode">设计模式，具体看控制台</div>
</template>
<script>
  import pubsub from '@/utils/pubsub'
  export default {
    data() {
      return {
        bus: new pubsub()
      }
    },
    mounted() {
      let vm = this
      vm.bus.on('yoki', function (data) {
        console.log('yoki', data)
      })
      vm.bus.on('yoki', function () {
        console.log('111')
      })
      vm.bus.emit('yoki', 'data')
      console.log(vm.bus)
    },
    beforeDestroy() {
      let vm = this
      vm.bus.off('yoki')
      console.log(vm.bus)
    }
  }

</script>
