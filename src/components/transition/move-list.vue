<style lang="less" scoped>
  // 这里是move
  .flip-list-move {
    transition: transform 1s;
  }
</style>

<template>
  <div class="move">
      <p>transition-group组件有一个特殊之处，不仅可以进入和离开动画，还可以改变定位。</p>
      <p>这个改变定位的新功能，可以了解v-move类名特性，他会在元素的改变定位过程中使用。</p>
      <p>这里是直接给move类添加过渡动画</p>
      <button @click='shuffle'>随机排序</button>
      <transition-group name='flip-list' tag='ul'>
          <li v-for='item in list' :key="item">
              {{item}}
            </li>
      </transition-group>
      <p>内部原理其实是使用了flip简单动画队列使用transform将元素平滑过渡到新的位置</p>
  </div>
</template>
<script>
  import _ from "lodash";
  export default {
    data() {
      return {
        list: [2, 1, 56, 4, 7, 8]
      };
    },
    methods: {
      shuffle() {
        this.list = _.shuffle(this.list);
      }
    }
  };
</script>

