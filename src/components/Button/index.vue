<script setup>
import { gsap } from 'gsap'
import { ref } from 'vue'

const buttonRef = ref(null)
const buttonRingCenterRef = ref(null)
const isClicked = ref(false)

const click = () => {
  isClicked.value = !isClicked.value
  isClicked.value
    ? gsap.to(buttonRingCenterRef.value, {
        boxShadow: '$shadow-inset-primary',
        duration: 0.8,
      })
    : gsap.to(buttonRingCenterRef.value, {
        boxShadow: '$shadow-primary',
        duration: 0.8,
      })
}
</script>

<template>
  <div class="button" ref="buttonRef" @click="click">
    <div class="button-ring">
      <div class="button-ring-center" ref="buttonRingCenter">
        <!--        <div class="octagon" v-for="octagon in 20" :key="octagon"></div>-->
        <div class="line" v-for="line in 3" :key="line"></div>
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
      //display: grid;
      //grid-template-columns: repeat(4, 1fr);
      //grid-template-rows: repeat(5, 1fr);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      gap: 20%;
      cursor: pointer;
      overflow: hidden;
      border-radius: $radius-secondary;
      box-shadow: $shadow-primary;

      .line {
        background: rgba($black-primary, 0.7);
        width: 30%;
        height: 2px;
        transform: rotate(-45deg);
      }

      //.octagon {
      //  clip-path: polygon(
      //    20% 0%,
      //    80% 0%,
      //    // Верхний срез
      //    100% 20%,
      //    100% 80%,
      //    // Правый срез
      //    80% 100%,
      //    20% 100%,
      //    // Нижний срез
      //    0% 80%,
      //    0% 20% // Левый срез
      //  );
      //
      //  background: $screen-secondary;
      //  border: 1px solid $black-primary;
      //  width: 100%;
      //  height: 100%;
      //}
    }
  }
}
</style>
