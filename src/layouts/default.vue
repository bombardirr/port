<script setup>
import Index from '@/components/Header/index.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="layout">
    <Index />

    <main class="main">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/main.scss' as *;
.layout {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  background: $black-secondary;
}

.main {
  flex: 1;
  overflow-y: auto;
}
</style>
