<script setup>
import TapeScreen from '@/components/TapeBody/TapeScreen.vue'
import TapeTopLeft from '@/components/TapeBody/TapeTopLeft.vue'
import TapeCenterLeft from '@/components/TapeBody/TapeCenterLeft.vue'
import TapeTopRight from '@/components/TapeBody/TapeTopRight.vue'
import TapeCenterRight from '@/components/TapeBody/TapeCenterRight.vue'
import TapeBottomLeftLeft from '@/components/TapeBody/TapeBottomLeftLeft.vue'

defineOptions({
  name: 'TapeBody',
})
</script>

<template>
  <div class="tape">
    <TapeScreen />
    <TapeTopLeft />
    <TapeCenterLeft />
    <TapeCenterRight />
    <TapeTopRight />
    <TapeBottomLeftLeft />
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/main.scss' as *;

.tape {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(12, 1fr);
  row-gap: 4px;
  column-gap: 5px;
  width: 400px;
  //width: 30vw;
  //max-width: 400px;
  padding: 5px;
  aspect-ratio: 2/3;
  border-radius: $radius-primary;
  background: $device-primary;
  //overflow: hidden;
  box-shadow:
    0 0 0 8px rgba(182, 177, 167, 0.7),
    0 0 4px 11px rgba(0, 0, 0, 0.7);

  &-screen {
    grid-column: 2 / 5;
    grid-row: 2 / 5;
  }

  &-top-left {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  &-center-left {
    grid-column: 1 / 2;
    grid-row: 2 / 7;
  }

  &-center-right {
    grid-column: 5 / 6;
    grid-row: 2 / 7;
  }

  &-top-right {
    grid-column: 5 / 6;
    grid-row: 1 / 2;
  }

  &-bottom-left_left {
    grid-column: 1 / 2;
    grid-row: 11 / 13;
  }
}
</style>
