<template>
  <HomeLogin />
</template>

<script>
import HomeLogin from "@/components/HomeLogin.vue";

export default {
  name: "App",
  components: {
    HomeLogin,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  width: 100vw;
  height: 100vh;
  background-image: url("./img/fondo.jpg");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100% 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

@media (max-width: 600px) {
  body {
    background-image: none;
    display: flex;
    justify-content: center;
    align-content: center;
  }
}
</style>
