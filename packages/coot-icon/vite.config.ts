import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';

const entry = fs
  .readdirSync(path.resolve(__dirname, './src/icons'), 'utf-8')
  .map((file) => `./src/icons/${path.basename(file)}`);

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: ['./src/index.ts', ...entry],
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
});
