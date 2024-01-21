<template>
  <div id="app">
    <Nav />
    <Home />
    <Menu />
    <MyFooter />
  </div>
</template>

<script>
  // Components
  import Nav from "./components/Nav.vue";
  import MyFooter from "./components/Footer.vue";
  import Home from "./components/Home.vue";
  import Menu from "./components/Menu.vue";

  export default {
    name: "App",
    components: {
      Nav,
      MyFooter,
      Home,
      Menu,
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
