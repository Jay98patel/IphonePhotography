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
      <section class="hero">
        <div class="container">
          <div
            class="hero--wrapper d-flex align-items-center justify-content-between"
          >
            <div class="hero--info">
              <span class="hero--info-tag">New Course</span>
              <h1 class="hero--info-title text-light">iPhone Photo Academy</h1>
              <div class="hero--newsletter">
                <p class="hero--newsletter-desc text-light">
                  Sign up now to get notified <br />
                  when this course is available!
                </p>
                <form>
                  <div class="form-floating">
                    <input
                      type="email"
                      class="text-light form-control"
                      :class="{
                        'is-invalid':
                          !isValidEmailAddress && emailAddress !== '',
                      }"
                      :placeholder="placeholderText"
                      id="emailAddress"
                      v-model="emailAddress"
                      required
                    />
                    <label for="emailAddress">{{ placeholderText }}</label>
                  </div>
                  <div class="form--action">
                    <button @click="goToThankYou" class="form--action-btn">
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
body {
  font-family: "Open Sans", sans-serif;
  background: #0f0f0f;
  color: #eeecec;
}
.header {
  padding: 3.934rem 0 1.747rem 0;
}
.hero--info {
  flex: 0 0 450px;
  width: 450px;
  &-tag {
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 2px;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 32px;
    text-transform: uppercase;
    background-color: #2b5341;
  }
  &-title {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 63.008px;
    line-height: 63.008px;
    margin: 1rem 0 2rem 0;
  }
}
.hero--newsletter {
  &-desc {
    font-size: 22px;
    line-height: 30px;
  }
  .form-floating {
    > .form-control {
      &:focus {
        & ~ label {
          opacity: 1;
          color: #3a3a3a;
        }
      }
    }
    > label {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
  .form-control:focus,
  .form-control {
    box-shadow: none;
    color: #eeecec;
    padding-left: 16px;
    padding-right: 16px;
    border-color: #3a3a3a;
    background-color: transparent;
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z' stroke='%233A3A3A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M22 6L12 13L2 6' stroke='%233A3A3A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: right 16px center;
    background-size: 24px;
  }
}

.is-invalid {
  border-color: #f00;
}

.form-control::placeholder {
  color: #ffffff;
}
.form-control.is-invalid::placeholder {
  color: #ff0000;
}

.form--action {
  margin-top: 1rem;
}

.form--action-btn {
  position: relative;
  border: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  padding: 1rem 2.25rem;
  z-index: 9;
  color: #eeecec;
  border: 1px solid transparent;
  border-radius: 6px;
  z-index: 2;
  background: linear-gradient(135deg, #370c14 0%, #280c23 100%),
    linear-gradient(135deg, #d41c3d 0%, #861b83 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0;
    border-radius: 6px;
    background: linear-gradient(135deg, #d41c3d 0%, #861b83 100%),
      linear-gradient(135deg, #62051c 0%, #440c3a 100%);
    transition: 0.25s ease;
  }
  &:hover {
    &:after {
      opacity: 0.3;
    }
  }
}

.hero--slider {
  width: 336px;
  flex: 0 0 336px;
  &-img {
    margin: 0 auto;
    width: 306px;
    height: 420px;
    pointer-events: none;
    object-fit: cover;
  }
}

.slider {
  top: -45px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 306px;
  height: 420px;
  overflow: unset;
}

.swiper-pagination {
  position: absolute;
  bottom: -215px !important;
  left: 0 !important;
  right: 0 !important;
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
}

.hero--slider-next {
  position: absolute;
  width: 48px;
  height: 48px;
  left: 0;
  right: 0;
  bottom: 71px;
  z-index: 99;
  border: none;
  margin: 0 auto;
  overflow: hidden;
  cursor: pointer;
  border-radius: 100%;
  text-indent: -9999px;
  background-color: transparent;
}

.hero--slider-thumbs {
  position: absolute;
  left: 27px;
  width: 41px;
  height: 41px;
  bottom: 74px;
}

.hero--slider-thumb {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  &.fadeIn {
    animation: 0.25s ease fadeIn;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes lineAnimation {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
