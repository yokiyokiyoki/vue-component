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
        }
      }
    };
</script>

