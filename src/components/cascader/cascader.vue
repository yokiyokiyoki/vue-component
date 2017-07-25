<template>
  <div class="cascader a">
    <div class="select-text" @click="changePanel">
      <span class="name">{{selectText}}</span>
    </div>
    <Caspanel v-show="show"></Caspanel>
  </div>
</template>
<script>
  import '@/assets/less/cascader.less'
  import Caspanel from './caspanel'
  export default {
    name: 'Cascader',
    data() {
      return {
        show: false,
        selectText: '11'
      }
    },
    components: {
      Caspanel
    },
    methods: {
      changePanel() {
        let vm = this
        vm.show = !vm.show
        event.stopPropagation()
      },
      hidePanel() {
        let vm = this
        vm.show = false
      }
    },
    mounted() {
      let vm = this
      document.addEventListener('click', vm.hidePanel)
    },
    beforeDestroy() {
      let vm = this
      document.removeEventListener('click', vm.hidePanel)
    }
  }

</script>
