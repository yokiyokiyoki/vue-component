<style lang="less" scoped>
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
      transform: translateY(30px);
    }
    .list-move {
      transition: transform 1s;
    }
    .list-complete-item {
      transition: all 1s;
      display: inline-block;
      margin-right: 10px;
    }
    .list-complete-enter,
    .list-complete-leave-to {
      opacity: 0;
      transform: translateY(30px);
    }
    .list-complete-leave-active {
      position: absolute;
    }
</style>

<template>
  <div class="list">
      <p>列表的过渡</p>
      <p>transition-group组件会渲染成为一个真实的元素，默认是span元素，可以tag特性改成其他元素</p>
      <p>一般来说尽量把里面的元素设为inline-block，或者flex</p>
      <button v-on:click="add">Add</button>
        <button v-on:click="remove">Remove</button>
      <transition-group name="list" tag="p">
        <span v-for="item in items" v-bind:key="item" class="list-item">
        {{ item }}
        </span>
    </transition-group>
    <p>这里有个问题，移上去的元素的周围的元素并不是平滑过渡的，而是瞬间移动的</p>
    <p>vue使用FLIP简单动画队列做了一个v-move的特性</p>
    <transition-group name="list-complete" tag="p">
        <span v-for="item in items" v-bind:key="item" class="list-complete-item">
        {{ item }}
        </span>
    </transition-group>
  </div>
</template>
<script>
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
      }
    };
</script>
