<style lang="less" scoped>
  //控制下面li粒度的
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active,
  .list-leave-active {
    transition: all 1s;
  }
  .list-enter,
  .list-leave-to {
    opacity: 0;
    transform: translateY(30px); //这样就是开始的时候从y坐标下30px移到Y坐标为0
    // transform: translateX(30px);
  }
</style>

<template>
  <div class="list">
      <p>列表的过渡</p>
      <p>transition-group组件会渲染成为一个真实的元素，默认是span元素，可以tag特性改成其他元素</p>
      <p>一般来说尽量把里面的元素设为inline-block，或者flex</p>
      <button v-on:click="add">增加随机一个</button>
      <button v-on:click="remove">移除随机一个</button>
      <!-- 指定包裹标签为p -->
      <transition-group name="list" tag="p">
        <span v-for="item in items" v-bind:key="item" class="list-item">
        {{ item }}
        </span>
    </transition-group>
    <p>但这里有个问题，就是添加或者移除元素的时候，周围的元素会瞬间移动到他们的新布局的位置，而不是平滑过渡。</p>
    <move-list />
    <search-list />
  </div>
</template>
<script>
  const moveList = () => import("./move-list.vue");
  const searchList = () => import("./search-list.vue");
  export default {
    data() {
      return {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nextNum: 10
      };
    },
    methods: {
      randomIndex: function() {
        return Math.floor(Math.random() * this.items.length);
      },
      add: function() {
        this.items.splice(this.randomIndex(), 0, this.nextNum++);
      },
      remove: function() {
        this.items.splice(this.randomIndex(), 1);
      }
    },
    components: {
      moveList,
      searchList
    }
  };
</script>
