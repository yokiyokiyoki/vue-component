<template>
  <div id="container">
    <nav class="aside">
      <ul>
        <li>
          <router-link to='/'>首页</router-link>
        </li>
        <li>
          <router-link to='/know'>认识vue</router-link>
        </li>
        <li>
          <router-link to='/instance'>组件实例</router-link>
        </li>
        <li>
          <router-link to='/computed'>computed属性</router-link>
        </li>
        <li>
          <router-link to='/showAndIf'>show和if</router-link>
        </li>
        <li>
          <router-link to='/forTemplate'>for循环数据</router-link>
        </li>
        <li>
          <router-link to='/bind'>dom元素上动态绑定元素和监听事件</router-link>
        </li>
      </ul>
    </nav>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import "@/assets/less/body.less";
  export default {
    name: "app"
  };
</script>

<style scope lang="less">
  #container {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    .aside {
      position: fixed;
      top: 0px;
      width: 220px;
      bottom: 0px;
      left: 0px;
      border-right: 1px solid #4fc08d;
      z-index: 10;
    }
    .main {
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      padding-left: 230px;
      background-color: white;
      padding-top: 10px;
    }
  }
</style>
