import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Changed from './' for Vercel compatibility
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Organized asset output
    emptyOutDir: true, // Cleans dist folder on rebuild
  },
  server: {
    port: 3000,
    open: true // Auto-open in development
  },
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.svg', '**/*.gif'], // Explicit asset types
  resolve: {
    alias: {
      '@': '/src', // Optional but helpful for imports
      '@assets': '/assets' // Direct alias to assets
    }
  }
});