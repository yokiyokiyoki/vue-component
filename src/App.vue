<template>
  <div id="container">
    <nav>
      <ul>
        <li>
          <router-link to='/'>首页</router-link>
        </li>
        <li>
          <router-link to='/cascader'>级联选择器</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
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
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
