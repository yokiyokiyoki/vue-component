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
      <button @click='change'>假排序</button>
        <button @click='recovery'>复原</button>
      <transition-group name='flip-list' tag='ul'>
          <li v-for='item in list' :key="item">
              {{item}}
            </li>
      </transition-group>
  </div>
</template>
<script>
    export default {
      data() {
        return {
          list: [2, 1, 56, 4, 7, 8],
          arr: [8, 4, 1, 2, 7, 56],
          arr1: [2, 1, 56, 4, 7, 8]
        };
      },
      methods: {
        shuffle(item) {
          let input = item;
          for (var i = input.length - 1; i >= 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            let itemAtIndex = input[randomIndex];
            input[randomIndex] = input[i];
            input[i] = itemAtIndex;
          }
          return input;
        },
        change() {
          this.list = [...this.arr];
        },
        recovery() {
          this.list = [...this.arr1];
        }
      }
    };
</script>

