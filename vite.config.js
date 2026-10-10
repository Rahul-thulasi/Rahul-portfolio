import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Set base to './' for flexible deployment (Vercel, Netlify) or '/' for custom domain
// For GitHub Pages at a sub-path e.g. /portfolio, set base: '/portfolio/'
export default defineConfig({
  plugins: [react()],
  base: '/Rahul-portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
