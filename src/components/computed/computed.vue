<template>
  <div class="computed">
      <div>1.{{name}}</div>
      <div>2.计算属性{{helloName}}</div>
      <div>3.{{n}}</div>
      <input type="text" v-model="n" placeholder="双向绑定n，使用set改变computed的值">
  </div>
</template>
<script>
    export default {
      data() {
        return {
          name: "yoki",
          a: "计算属性",
          hello: "hello"
        };
      },
      computed: {
        //计算属性有缓存，不是每次渲染都会重新计算（比如说methods）
        helloName() {
          //这样默认是get
          return "hello" + this.name;
        },
        n: {
          get() {
            return this.hello + this.a;
          },
          //this.n可以设定计算属性的值
          set(val) {
            this.a = val;
          }
        }
      }
    };
</script>

