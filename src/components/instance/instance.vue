<template>
  <div class="instance">
      {{message.name}}
      {{message.age}}
  </div>
</template>
<script>
    let mess = { name: "yoki" };
    export default {
      data() {
        return {
          message: mess
        };
      },
      created() {
        //mess和message指向的是同一个内存
        mess.name = "12";
        console.log(this.message === mess);
      }
    };
</script>

