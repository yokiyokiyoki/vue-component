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
        //mess和message（当前实例的数据）指向的是同一个内存
        mess.name = "12";
        console.log(this.message === mess);
        //mess={name:'vue'} 没有改变当前实例，因为这样相当于开辟了新的内存（新的对象），但是message还是指向的是原来的

        //data准备好,但是尚未挂载到dom节点。而且里面的属性，this直接加个$等同
        console.log(this.$data, this.$el === undefined);
      },
      mounted() {
        // 实例已经挂载到dom节点
        console.log(this.$el);
      }
    };
</script>

