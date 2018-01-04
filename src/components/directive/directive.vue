<template>
  <div class="directive">
      <p>自定义指令directive</p>
      <p>代码复用和抽象的形式主要是组件。但是在一些情况下，仍要对普通dom元素进行底层操作</p>
      <input type="text" v-focus>
      <p>一个指令定义对象可以提供以下几个钩子函数</p>
      <p>1.bind：只调用一次，指令第一次绑定到元素时候调用</p>
      <p>2.inserted:指令被绑定元素插入父节点时调用</p>
      <p>3.update:所在组件的vnode更新时候调用，但是可能发生在其子Vnode更新之前</p>
      <p>4.componentUpdated:指令所在组件的vnode及其子vnode全部更新后完成</p>
      <p>5.unbind:只调用一次，于元素解绑时候调用</p>
      <button @click='show=!show'>更改指令所在组件的状态</button>
      <input type="text" placeholder="改变指令的value" v-model='message'>
      <p v-demo:foo.a.b="message" v-show='show'></p>
      <button @click='color="red"'>改成红色</button>
      <button @click='color="yellow"'>改成黄色</button>
      <p v-color='color'>bind和update相同操作，用函数简写</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        message: "我是指令",
        show: false,
        color: "yellow"
      };
    },
    mounted() {
      this.message = "更改了指令";
    },
    directives: {
      focus: {
        inserted(el, binding, vnode) {
          //el代表当前元素，可以进行dom操作
          //   除了el，应当保持其他都只是可读的
          el.focus();
        }
      },
      demo: {
        bind(el, binding, vnode) {
          const s = JSON.stringify;
          el.innerHTML = `name:${binding.name};value（表达式的值）:${binding.value};expression（表达式）:${binding.expression};arg（传给指令的参数）:${binding.arg};modifiers（修饰符）:${s(
            binding.modifiers
          )}`;
        },
        update(el, binding, vnode) {
          //指令所在的vnode更新(更改了message也属于)
          console.log("update钩子函数：" + binding.value);
        },
        componentUpdated(el, binding, vnode) {
          //指令所在的vnode更新(更改了message也属于)
          console.log("componentUpdated钩子函数:" + binding.value);
        }
      },
      color(el, binding) {
        // 很多时候在第一次绑定和更新的时候，都是做同样的动作的，我们可以函数简写
        el.style.backgroundColor = binding.value;
      }
    }
  };
</script>
