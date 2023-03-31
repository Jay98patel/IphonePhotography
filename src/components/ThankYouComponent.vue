<template>
  <div class="vh-100 d-flex flex-column justify-content-center px-3">
    <div
      class="d-flex justify-content-center align-items-center flex-column"
    >
      <h1>Thank You!</h1>
      <p class="mb-0">
        You will get notified when iPhone <br />Photo Academy becomes available
      </p>
    </div>
    <div class="d-flex justify-content-center form--action">
      <button @click="subscribeToYoutube" class="btn form--action-btn">
        Subscribe To Our Youtube Channel
      </button>
    </div>
  </div>
</template>

<script>
import { constants } from "@/constants/constant";

export default {
  name: "ThankYouComponent",
  methods: {
    subscribeToYoutube() {
      window.location.href = constants.youtubeChannelLink;
    },
  },
};
</script>
