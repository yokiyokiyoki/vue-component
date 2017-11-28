<template>
  <div class="for">
      <!-- key是为了保持这个dom元素唯一，因为vue会缓存 -->
      <!-- item和index位置不可换,index可选 -->
      <span v-for="(item,index) in list" :key="item">类目是{{item}}，索引是{{index}}</br></span>
        <!-- 可以循环一个template，一个整体 -->
      <template v-for="(item,index) in list">
          <span>我是整体里面的{{item}}</span>
          <span>我是整体里面的{{index}}</span>
        </template> 
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

