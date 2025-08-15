<script setup></script>

<template>
  <div class="screen"></div>
</template>

<style lang="scss">
@use '@/assets/styles/main.scss' as *;

.screen {
  position: relative;
  width: 100%;
  max-width: 1000px;
  aspect-ratio: 3 / 2;
  background: $black-primary;
  border-radius: $radius-secondary;
  box-shadow: $shadow-primary;
}
</style>
