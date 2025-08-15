<script setup>
import Button from '../Button/index.vue'
</script>

<template>
  <div class="tape-bottom-left_left">
    <Button />
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/main.scss' as *;

.tape-bottom-left_left {
  background: $device-primary;
  border-radius: $radius-primary;
  box-shadow:
    inset 1px 1px 1px 1px rgba(255, 255, 255, 0.5),
    inset -1px -1px 1px 1px rgba(0, 0, 0, 0.5);
  padding: 10px;
  overflow: hidden;
}
</style>
