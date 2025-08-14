<template>
  <div class="switcher">
    <div class="inset" />
    <div class="outset">
      <div class="switcher__circle" />
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/main.scss' as *;

.switcher {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 120px;
  height: 40px;
  border-radius: $radius-primary;
  background: $white-primary;
  padding: 4px 6px;

  &__circle {
    height: 100%;
    border-radius: 50%;
    background: $white-primary;
  }
}
</style>
