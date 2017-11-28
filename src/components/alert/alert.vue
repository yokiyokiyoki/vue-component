<style lang="less" scoped>
  .alert-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 2001;
    .alert-box {
      background-color: #fff;
      height: 100px;
      width: 100px;
    }
  }


</style>

<template>
  <div class="alert-wrapper">
    <div class="alert-box">
      <div class="header" @click="open">
        open
      </div>
      <div class="content" @click="close">
        close
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>
<script>
  import dom from "@/utils/dom";
  export default {
    data() {
      return {
        modal: null
      };
    },
    mounted() {
      let body = document.querySelector("body");
      this.modal = document.createElement("div");
      this.modal.className = "modal";
      body.appendChild(this.modal);
    },
    methods: {
      close() {
        let body = document.querySelector("body");
        body.removeChild(this.modal);
      },
      open() {
        let body = document.querySelector("body");
        body.appendChild(this.modal);
      }
    },
    beforeDestroy() {
      this.modal = null;
    }
  };

</script>
