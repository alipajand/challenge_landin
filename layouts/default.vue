<template>
  <div class="global-container">
    <transition
      enter-active-class="page-enter-active"
      leave-active-class="page-leave-active"
      enter-to-class="page-enter"
      leave-to-class="page-leave-to"
    >
      <nuxt :key="$route.fullPath" class="transitioning" />
    </transition>
  </div>
</template>

<script>
    export default {};
</script>
