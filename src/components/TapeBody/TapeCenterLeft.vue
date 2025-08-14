<script setup></script>

<template>
  <div class="tape-center-left"></div>
</template>

<style lang="scss">
@use '@/assets/styles/main.scss' as *;

.tape-center-left {
  width: 100%;
  height: 100%;
  background: $device-primary;
  border-radius: 0 $radius-secondary 0 0;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.5);
}
</style>
