<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="layout">
    <Header />

    <main class="main">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<style lang="scss">
.layout {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
  overflow-y: auto;
}
</style>
