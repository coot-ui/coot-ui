import { defineConfig } from 'vite';
import path from 'path';

export const Alias = {
  '@': path.resolve(__dirname, './src'),
  '~@': path.resolve(__dirname, './src'),
};

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/my-element.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
  resolve: {
    alias: Alias,
  },
});
