import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/zhijiangchang.github.io/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  assetsInclude: ['**/*.md'],
})
