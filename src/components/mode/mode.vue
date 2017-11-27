<template>
  <div class="mode">设计模式，具体看控制台</div>
</template>
<script>
  import pubsub from "@/utils/pubsub";
  export default {
    data() {
      return {
        bus: new pubsub()
      };
    },
    mounted() {
      this.bus.emit("yoki", "data");
      this.bus.on("yoki", function(data) {
        console.log("yoki", data);
      });
      this.bus.on("yoki", function() {
        console.log("111");
      });
      console.log(this.bus);
    },
    beforeDestroy() {
      this.bus.off("yoki");
      console.log(this.bus);
    }
  };
</script>
