import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: ['./src/index.ts'],
      formats: ['umd'],
      name: 'CootIcons',
    },
    minify: true,
    emptyOutDir: false,
    target: ['node8', 'es2015'],
  },
});
