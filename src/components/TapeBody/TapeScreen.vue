<script setup></script>

<template>
  <div class="tape-screen">
    <div class="border-level-a">
      <div class="border-level-b">
        <div class="border-level-c"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/main.scss' as *;

.tape-screen {
  background: $device-primary;
  padding: 8px;
  border-radius: $radius-secondary;
  box-shadow: $shadow-primary;

  .border-level-a {
    width: 100%;
    height: 100%;
    padding: 10px;
    background: $screen-secondary;
    border-radius: $radius-secondary;
    box-shadow: $shadow-inset-primary;

    .border-level-b {
      width: 100%;
      height: 100%;
      padding: 14px;
      background: $black-primary;
      //box-shadow: $shadow-inset-primary;

      .border-level-c {
        width: 100%;
        height: 100%;
        background: $screen-primary;
      }
    }
  }
}
</style>
