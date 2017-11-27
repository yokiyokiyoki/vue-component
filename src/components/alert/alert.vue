<style lang="less" scoped>
    .alert-wrapper {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      z-index: 2001;
      display: flex;
      justify-content: center;
      align-items: center;
      .alert {
        background-color: #fff;
        height: 100px;
        width: 100px;
      }
    }


</style>

<template>
  <div class="alert-wrapper">
      <div class="alert-box">
          <div class="header"></div>
          <div class="content"></div>
          <div class="footer"></div>
      </div>
  </div>
</template>
<script>
    import dom from "@/utils/dom";
    export default {
      mounted() {
        let modal = document.createElement("div");
        let body = document.querySelector("body");
        modal.className = "modal";
        body.appendChild(modal);
      }
    };
</script>

