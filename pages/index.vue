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
                سلام
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
  export default {};
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
