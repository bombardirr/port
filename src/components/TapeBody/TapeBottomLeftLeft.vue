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
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.5);
  padding: 20px;
}
</style>
