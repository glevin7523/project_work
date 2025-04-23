import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',  // 👈 This fixes the 404 asset issue
  plugins: [react()]
})
