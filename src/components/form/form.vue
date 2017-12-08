<template>
  <div class="form">
    <!-- 文本 -->
    <input type="text" v-model="message" placeholder="单个文本">
    <p>input文本输入:{{message}}</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        message: ""
      };
    }
  };
</script>

