<template>
  <div>
    <div class="global-main-bg position-absolute h-100 w-100" />
    <div class="global-main-wave-container position-absolute h-100 w-100 overflow-hidden">
      <div class="global-main-wave left-top position-absolute" />
      <div class="global-main-wave right-bottom position-absolute" />
    </div>
    <transition
      enter-active-class="page-enter-active"
      enter-to-class="page-enter"
      leave-active-class="page-leave-active"
      leave-to-class="page-leave-to"
    >
      <nuxt :key="$route.fullPath" class="transitioning" />
    </transition>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  @import "../assets/scss/dep";

  .global-main-bg {
    z-index: -2;
    background: url('/img/bg.png') center center no-repeat;
    background-size: cover;
  }

  .global-main-wave-container {
    .global-main-wave {
      width: 50%;
      height: 30%;
      z-index: -1;
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
</style>
