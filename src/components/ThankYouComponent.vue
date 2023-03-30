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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
body {
  font-family: "Open Sans", sans-serif;
  background: #0f0f0f;
  color: #eeecec;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* make it one */

// .form--action {
//   margin-top: 1rem;
// }

// .form--action-btn {
//   position: relative;
//   border: none;
//   font-weight: 600;
//   font-size: 16px;
//   line-height: 16px;
//   padding: 1rem 2.25rem;
//   z-index: 9;
//   color: #eeecec;
//   border: 1px solid transparent;
//   border-radius: 6px;
//   z-index: 2;
//   background: linear-gradient(135deg, #370c14 0%, #280c23 100%),
//     linear-gradient(135deg, #d41c3d 0%, #861b83 100%);
//   background-origin: border-box;
//   background-clip: padding-box, border-box;
//   &:after {
//     position: absolute;
//     content: "";
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     z-index: -1;
//     opacity: 0;
//     border-radius: 6px;
//     background: linear-gradient(135deg, #d41c3d 0%, #861b83 100%),
//       linear-gradient(135deg, #62051c 0%, #440c3a 100%);
//     transition: 0.25s ease;
//   }
//   &:hover {
//     &:after {
//       opacity: 0.3;
//     }
//   }
// }
</style>
