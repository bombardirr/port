<script setup>
import Tape from '../components/TapeBody/index.vue'
import Switcher from '../components/Switcher/index.vue'
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div class="hero">
    <Switcher />
    <div class="hero__container">
      <Tape />
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/main.scss' as *;

.hero {
  position: relative;
  height: 100%;
  padding: 5vh 5vw;
  background: $gradient-primary;

  &__container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.6);
  }
}
</style>
