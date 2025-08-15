<script setup></script>

<template>
  <div class="button" ref="buttonRef">
    <div class="button-ring">
      <div class="button-ring-center" ref="buttonRingCenterRef">
        <div class="line" ref="lineRef" v-for="line in 3" :key="line"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/main.scss' as *;

.button {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background: $orange-secondary;
  border-radius: $radius-primary;
  box-shadow: $shadow-primary;
  padding: 10px;

  &-ring {
    width: 100%;
    height: 100%;
    border-radius: $radius-secondary;
    background: $screen-secondary;
    padding: 2px;
    box-shadow: $shadow-primary;

    &-center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      gap: 20%;
      cursor: pointer;
      overflow: hidden;
      box-shadow: $shadow-primary;
      border-radius: $radius-secondary;
      transform-origin: center center;
      will-change: transform, box-shadow;

      .line {
        background: rgba($black-primary, 0.7);
        width: 30%;
        height: 2px;
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
