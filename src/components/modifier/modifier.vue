<template>
  <div class="modifier">
    <div class="father" @click="fatherClick">
      父亲节点
      <!-- 阻止冒泡 -->
      <div class="son" @click.stop="sonClick">
        儿子节点
        <div class="grand" @click="grandClick">
          孙子节点
        </div>
      </div>
    </div>
    <div @click.prevent="preventClick">阻止默认行为，比如提交submit</div>
    <div @click.prevent.stop="preventClick">阻止默认行为和阻止冒泡，可以串联</div>
    <!-- 点它本身才会触发父亲节点本身，如果没有这个self的话，那么点击儿子节点，父亲节点本身会出现 -->
    <div class="father" @click.self="fatherClick">
      父亲节点本身
      <div class="son" @click="sonClick">
        儿子节点本身
      </div>
    </div>
    <div v-on:click.once="doThis">我只会触发一次，也可以用于自定义组件（其他修饰符只能用于原生dom事件</div>
    <!-- 开启捕获模式，没有捕获的话默认点击son，出来的是儿子，父亲，现在则是父亲，儿子 -->
    <div class="father" @click.capture="fatherClick">
      父亲节点本身
      <div class="son" @click="sonClick">
        儿子节点本身
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    methods: {
      fatherClick() {
        // 如果儿子节点没有阻止冒泡，点击儿子节点会出现
        console.log("父亲节点");
      },
      sonClick() {
        console.log("儿子节点");
      },
      grandClick() {
        console.log("孙子节点");
      },
      preventClick() {
        console.log("阻止默认行为");
      },
      doThis() {
        console.log('我只会触发一次')
      }
    }
  };

</script>
