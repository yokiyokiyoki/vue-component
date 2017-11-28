<template>
  <div class="for">
      <!-- key是为了保持这个dom元素唯一，因为vue会缓存 -->
      <!-- item和index位置不可换 -->
      <span v-for="(item,index) in list" :key="item">类目是{{item}}，索引是{{index}}</br></span>
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

