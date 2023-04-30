/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setupTests.ts',
    exclude: ['node_modules', 'dist', 'coverage', 'cypress'],
    coverage: {
      provider: 'c8',
      all: true,
      enabled: true,
      reporter: ['text'],
      include: ['**/*.{jsx,tsx}'],
    },
  },
  server: {
    host: true,
    port: 3000,
  },
  build: {
    sourcemap: 'hidden',
  },
});
