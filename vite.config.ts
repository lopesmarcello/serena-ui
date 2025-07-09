/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SerenaUI',
      fileName: (format) => `serena-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'tailwindcss', '@tailwindcss/vite', 'class-variance-authority'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'tailwindcss': 'tailwindcss',
          '@tailwindcss/vite': 'tailwindcssVite',
          'class-variance-authority': 'classVarianceAuthority',
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
})
