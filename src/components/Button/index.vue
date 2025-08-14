<script setup></script>

<template>
  <div class="button">
    <div class="button-line"></div>
    <div class="button-line"></div>
    <div class="button-line"></div>
    <div class="button-line"></div>
    <div class="button-line"></div>
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
  background: rgba(230, 124, 72, 0.7);
  border-radius: $radius-primary;
  box-shadow:
    0 0 2px 4px rgba(230, 124, 72, 1),
    0 0 0 6px rgba(0, 0, 0, 0.5),
    0 0 1px 10px rgba(230, 124, 72, 0.8),
    0 0 2px 12px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  cursor: pointer;

  &:hover {
    .button-line {
      box-shadow: 0 0 6px 1px rgba(180, 39, 8, 0.9);
      filter: brightness(1.6);
      transition: all 0.3s ease;
    }
  }

  &-line {
    width: 200%;
    height: 2px;
    background: rgb(180, 39, 8);
    border-radius: 50%;
    transform: rotate(45deg) translateY(-2px);
    transition: all 0.3s ease;
  }
}
</style>
