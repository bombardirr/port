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
  box-shadow: 0 0 1px 1px rgba(46, 41, 38, 0.8);

  .border-level-a {
    width: 100%;
    height: 100%;
    padding: 10px;
    background: $screen-secondary;
    border-radius: $radius-secondary;
    box-shadow: inset 0 0 4px 2px rgba(46, 41, 38, 0.8);

    .border-level-b {
      width: 100%;
      height: 100%;
      padding: 14px;
      background: $black-primary;
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.5);

      .border-level-c {
        width: 100%;
        height: 100%;
        background: $screen-primary;
      }
    }
  }
}
</style>
