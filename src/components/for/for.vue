<template>
  <div class="for">
      <!-- key是为了保持这个dom元素唯一，因为vue会缓存 -->
      <span v-for="item in list" :key="item">{{item}}</span>
  </div>
</template>
<script>
    export default {
      data() {
        return {
          list: ["yoki", "yokiyoki", "yokiyokiyoki"]
        };
      }
    };
</script>

