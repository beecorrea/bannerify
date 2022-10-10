import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@lib': path.resolve(__dirname, './src/lib/'),
      '@stores': path.resolve(__dirname, './src/store/stores'),
      '@actions': path.resolve(__dirname, './src/store/actions')
    },
  },
  plugins: [vue()]
})
