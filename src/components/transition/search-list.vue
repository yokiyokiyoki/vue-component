<template>
  <div class="search">
      <p>搜索列表过渡</p>
      <p>通过JavaScript和data通信</p>
      <p>一般是通过一个computed属性来控制页面上展示的列表</p>
      <input type="text" v-model='query' placeholder="搜索">
      <transition-group name='list' tag='ul' @beforeEnter='beforeEnter' @enter='enter' @leave='leave'>
        <li v-for='n in computedList' :key='n.msg'>{{n.msg}}</li>
      </transition-group>
  </div>
</template>
<script>
    import Velocity from "velocity-animate";
    export default {
      data() {
        return {
          query: "",
          list: [
            { msg: "Bruce Lee" },
            { msg: "Jackie Chan" },
            { msg: "Chuck Norris" },
            { msg: "Jet Li" },
            { msg: "Kung Fury" }
          ]
        };
      },
      computed: {
        computedList() {
          const vm = this;
          return this.list.filter(item => {
            return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1;
          });
        }
      },
      methods: {
        beforeEnter(el) {
          el.style.opacity = 0;
          el.style.height = 0;
        },
        enter(el, done) {
          Velocity(el, { opacity: 1, height: "1.6em" }, { complete: done });
        },
        leave(el, done) {
          Velocity(el, { opacity: 0, height: 0 }, { complete: done });
        }
      }
    };
</script>

