<template>
  <div class="hero-wrapper">
    <header class="header">
      <div class="container">
        <a href="javascript:void(0)" class="site--logo">
          <img
            src="@/assets/images/ips-logo.svg"
            alt="iPhone Photography School"
            title="iPhone Photography School"
            class="site--logo-img"
          />
        </a>
      </div>
    </header>
    <main class="main">
      <section class="hero container">
        <div
          class="hero--wrapper d-flex flex-column flex-lg-row align-items-center justify-content-between"
        >
          <div class="hero--info">
            <span class="badge bg-success text-uppercase">New Course</span>
            <h1 class="hero--info-title">iPhone Photo Academy</h1>
            <div class="hero--newsletter">
              <p class="hero--newsletter-desc">
                Sign up now to get notified <br />
                when this course is available!
              </p>
              <form>
                <div class="form-floating">
                  <input
                    type="email"
                    class="form-control"
                    :class="{
                      'is-invalid': !isValidEmailAddress && emailAddress !== '',
                    }"
                    :placeholder="placeholderText"
                    id="emailAddress"
                    v-model="emailAddress"
                    required
                  />
                  <label for="emailAddress">{{ placeholderText }}</label>
                </div>
                <div class="form--action">
                  <button
                    @click="goToThankYou"
                    :class="{
                      disabled: !isValidEmailAddress && emailAddress !== '',
                    }"
                    :disabled="!isValidEmailAddress && emailAddress !== ''"
                    class="btn form--action-btn"
                  >
                    Please Notify Me
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="hero--slider position-relative">
            <img
              class="hero--slider-bg img-fluid"
              src="@/assets/images/iPhone-mokup.png"
            />
            <swiper
              class="slider position-absolute"
              :effect="'fade'"
              :rewind="true"
              :autoplay="autoplayOptions"
              :slides-per-view="1"
              :navigation="{ nextEl: '.hero--slider-next' }"
              :pagination="{
                clickable: true,
              }"
              :modules="modules"
              @activeIndexChange="onAfterChange"
            >
              <swiper-slide
                v-for="(photo, index) in slides"
                :key="index"
                class="hero--slider-item"
              >
                <img
                  class="hero--slider-img"
                  :src="require(`@/assets/images/${photo}`)"
                />
              </swiper-slide>
            </swiper>
            <div class="hero--slider-next"></div>
            <div class="hero--slider-thumbs">
              <img
                v-for="(photo, index) in smallFilteredPhotos"
                :key="index"
                :src="require(`@/assets/images/${photo}`)"
                class="hero--slider-thumb"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { constants } from "@/constants/constant";

export default defineComponent({
  name: "WelcomeComponent",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, EffectFade, Navigation, Pagination],
    };
  },
  data() {
    return {
      emailAddress: "",
      autoplayOptions: {
        delay: 8000,
        disableOnInteraction: false,
      },
      slideIndex: 0,
      slides: [],
      smallCarouselSlide: [],
    };
  },
  created() {
    this.slides = constants.slides;
    this.smallCarouselSlide = constants.smallCarousel;
  },
  computed: {
    isValidEmailAddress() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(this.emailAddress);
    },
    smallFilteredPhotos() {
      const prevIndex =
        this.slideIndex === 0
          ? this.smallCarouselSlide.length - 1
          : this.slideIndex - 1;
      return [this.smallCarouselSlide[prevIndex]];
    },
    placeholderText() {
      if (this.emailAddress === "") {
        return "Enter your Email Address";
      } else if (!this.isValidEmailAddress) {
        return "Please Enter a Valid Email Address";
      } else {
        return "Email Address";
      }
    },
  },
  methods: {
    onAfterChange(swiper) {
      this.slideIndex = swiper.activeIndex;
      document.querySelector(".hero--slider-thumb").classList.add("fadeIn");
    },
    goToThankYou() {
      if (this.isValidEmailAddress) {
        this.$router.push("/thankyou");
      }
    },
  },
});
</script>

<style lang="scss">
.swiper-pagination {
  position: absolute;
  bottom: -215px !important;
  left: 0 !important;
  right: 0 !important;
  top: unset !important;
  padding: 0;
  text-align: center;
  z-index: 9;
  .swiper-pagination-bullet {
    position: relative;
    display: inline-flex;
    vertical-align: middle;
    height: 1px;
    width: 55px;
    border: none;
    opacity: 1;
    overflow: hidden;
    pointer-events: none;
    text-indent: -9999px;
    background: #3a3a3a;
    border-radius: 0;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 0;
      background-color: #eeecec;
    }
    & + .swiper-pagination-bullet {
      margin-left: 8px;
    }
    &.swiper-pagination-bullet-active {
      &:before {
        animation: 8.5s ease lineAnimation forwards;
      }
    }
  }

  @media (max-width: 575.98px) {
    bottom: -115px !important;
    left: -25px !important;
  }
}
</style>
