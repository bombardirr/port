
<script>
export default {
  name: 'DefaultLayout'
}
</script>

<template>
  <div class="layout">
    <header class="header">
      <h1>Шапка</h1>
    </header>

    <main class="main">
      <slot />
    </main>

    <footer class="footer">
      <p>Футер</p>
    </footer>
  </div>
</template>

<style lang="scss">
.layout {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  flex-shrink: 0;
}

.main {
  flex: 1;
  overflow-y: auto;
}

.footer {
  flex-shrink: 0;
}
</style>

