<template>
  <div id="container">
    <nav class="aside">
      <ul>
        <li>
          <router-link to='/'>首页</router-link>
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
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
