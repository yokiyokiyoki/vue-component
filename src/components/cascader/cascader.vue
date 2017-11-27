<template>
  <div class="cascader">
    <div class="select-text" @click="changePanel">
      <span class="name">{{selectText}}</span>
      <i class="el-icon-arrow-down"></i>
    </div>
    <Caspanel v-if='show'></Caspanel>
  </div>
</template>
<script>
  import "@/assets/less/cascader.less";
  import Caspanel from "./caspanel";
  import dom from "@/utils/dom";
  export default {
    name: "Cascader",
    data() {
      return {
        show: false,
        selectText: "11"
      };
    },
    components: {
      Caspanel
    },
    methods: {
      changePanel() {
        let vm = this;
        vm.show = !vm.show;
        event.stopPropagation();
      },
      hidePanel() {
        let vm = this;
        vm.show = false;
      }
    },
    watch: {
      show(val) {
        let i = document.getElementsByClassName("el-icon-arrow-down")[0];
        if (val) {
          dom.addClass(i, "is-reverse");
        } else {
          dom.removeClass(i, "is-reverse");
        }
      }
    },
    mounted() {
      let vm = this;
      dom.on(document, "click", vm.hidePanel);
    },
    beforeDestroy() {
      let vm = this;
      dom.off(document, "click", vm.hidePanel);
    }
  };
</script>
