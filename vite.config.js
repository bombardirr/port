import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { devtools } from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    devtools()
  ]
})
