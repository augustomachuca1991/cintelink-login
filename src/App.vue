<template>
  <HomeLogin img="./img/logo.png" />
</template>

<script>
import HomeLogin from "./components/HomeLogin.vue";

export default {
  name: "App",
  components: {
    HomeLogin,
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background-image: url("./img/fondo.jpg");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100% auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
