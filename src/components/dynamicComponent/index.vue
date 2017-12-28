<template>
  <div class="dynamic">
    <p>动态组件，可以看做是路由</p>
    <button @click='changeView'>切换组件</button>
    <!-- is是指定哪个组件 -->
    <component :is="currentView"></component>
    <p>这样普通切换的时候，相当于组件重新渲染</p>
    <p>但是如果想保留状态，那么用keep-alive</p>
    <keep-alive>
        <component :is="currentView"></component>
    </keep-alive>
    <button @click='loadAsync'>加载异步组件</button>
    <component :is="asyncView"></component>
  </div>
</template>
<script>
  import childOne from "./childOne.vue";
  import childTwo from "./childTwo.vue";
  export default {
    data() {
      return {
        currentView: "childOne",
        asyncView: ""
      };
    },
    methods: {
      changeView() {
        if (this.currentView == "childOne") {
          this.currentView = "childTwo";
        } else {
          this.currentView = "childOne";
        }
      },
      loadAsync() {
        this.asyncView = "childThree";
      }
    },
    components: {
      childOne,
      childTwo,
      childThree: () => import("./childThree.vue")
    }
  };
</script>
