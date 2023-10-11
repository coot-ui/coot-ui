import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from 'path';
import fs from 'fs';

export const Alias = {
  '@': path.resolve(__dirname, './src'),
  '~@': path.resolve(__dirname, './src'),
};

const componentsDirs = fs.readdirSync(
  path.resolve(__dirname, './src/components')
);

const componentEntries = {};

for (const comp of componentsDirs) {
  componentEntries[
    `components/${comp}/index`
  ] = `./src/components/${comp}/index.ts`;
}

export default defineConfig({
  plugins: [dts()],
  build: {
    target: 'modules',
    emptyOutDir: false,
    lib: {
      entry: {
        ...componentEntries,
        index: './src/index.ts',
      },
      formats: ['es', 'cjs'],
      fileName: '[name]',
    },
    rollupOptions: {
      external: [/^lit/],
      output: {},
    },
  },
  resolve: {
    alias: Alias,
  },
});
