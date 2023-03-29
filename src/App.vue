<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view></router-view>
  </div>
</template>

<script>
// import ThankYouComponent from "@/components/ThankYouComponent.vue";
// import WelcomeComponent from "@/components/WelcomeComponent.vue";

export default {
  name: "App",
  components: {
    // ThankYouComponent,
    // WelcomeComponent,
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
