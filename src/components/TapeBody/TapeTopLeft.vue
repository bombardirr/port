<script setup></script>

<template>
  <div class="tape-top-left"></div>
</template>

<style lang="scss">
@use '@/assets/styles/main.scss' as *;

.tape-top-left {
  width: 100%;
  height: 100%;
  background: $device-primary;
  border-radius: $radius-primary 0 $radius-secondary 0;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.5);
}
</style>
