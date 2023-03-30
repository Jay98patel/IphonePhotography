<template>
  <div
    class="d-flex justify-content-center align-items-center flex-column text-light"
  >
    <h1>Thank You!</h1>
    <p>
      You will get notified when iPhone <br />Photo Academy becomes available
    </p>
  </div>
  <div class="d-flex justify-content-center form--action">
    <button @click="subscribeToYoutube" class="form--action-btn">
      Subscribe To Our Youtube Channel
    </button>
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
