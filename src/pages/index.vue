<script setup>
import Screen from '../components/Screen/index.vue'
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div class="hero">
    <!--    <Switcher />-->
    <div class="hero__container">
      <!--      <Tape />-->
      <Screen />
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/main.scss' as *;

.hero {
  position: relative;
  height: 100%;
  padding: 5vh 5vw;
  background: $black-secondary;

  &__container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: $black-secondary;
    padding: 5px;
  }
}
</style>
