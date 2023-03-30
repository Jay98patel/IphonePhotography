<template class="h-100">
  <div class="h-100">
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

<style lang="scss">
html,
body {
  height: 100%;
  overflow: hidden;
}

#app {
  color: black;
}
</style>
