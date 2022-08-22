<template>
  <NavBar />
  <router-view></router-view>
</template>

<script>
import NavBar from "./components/Nav.vue";
export default {
  name: "App",
  components: { NavBar },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
