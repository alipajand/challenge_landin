<template>
  <div>
    <div class="index-main-bg position-absolute h-100 w-100" />
    <div class="index-main-wave-container position-absolute h-100 w-100 overflow-hidden">
      <div class="index-main-wave left-top position-absolute" />
      <div class="index-main-wave right-bottom position-absolute" />
    </div>
    <div class="v-center rtl">
      <b-container>
        <b-row class="justify-content-center">
          <b-col lg="9" cols="12">
            <b-card class="border-0 rounded-expanded position-relative index-question-wrapper">
              <b-card class="border-0 index-top-header shadow-large text-center">
                چقدر از کیفیت خدمات ما راضی هستید؟
              </b-card>
              <div class="p-4">
                <b-row class="text-center justify-content-center">
                  <b-col cols="2">
                    <b-img height="66" class="mb-3" src="/img/slider2.png" />
                    زیاد
                  </b-col>
                  <b-col lg="6" cols="8" class="d-flex align-items-center">
                    <vue-slider
                      v-model="sliderVal"
                      class="w-100 pb-4"
                      :min="sliderMin"
                      :max="sliderMax"
                      :interval="1"
                      :tooltip="'none'"
                      @dragging="onSliderChange"
                    />
                  </b-col>
                  <b-col cols="2">
                    <b-img height="66" class="mb-3" src="/img/slider1.png" />
                    معمولی
                  </b-col>
                </b-row>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      sliderVal: 0,
      sliderMin: 0,
      sliderMax: 5
    }),
    methods: {
      onSliderChange(event) {
        console.log(event);
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "../assets/scss/dep";

  .index-main-bg {
    z-index: -2;
    background: url('/img/bg.png') center center no-repeat;
    background-size: cover;
  }

  .index-main-wave-container {
    .index-main-wave {
      z-index: -1;
      width: 50%;
      height: 30%;
      background: url('/img/waves.png') center center no-repeat;
      background-size: contain;

      &.left-top {
        top: -4%;
        left: -10%;
        @include transform(rotate(180deg));
      }

      &.right-bottom {
        right: -10%;
        bottom: -4%;
        @include opacity(0.7)
      }
    }
  }

  .index-question-wrapper {
    &.rounded-expanded {
      @include border-radius(0 0 20px 20px !important);
    }

    .index-top-header {
      left: -5%;
      top: -64px;
      right: -5%;
      width: 110%;
      position: absolute;
      @include border-radius(64px !important);

      &.shadow-large {
        @include box-shadow(0 0 20px rgba(#22264C, 0.15))
      }
    }
  }
</style>
