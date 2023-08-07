import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from 'path';
import fs from 'fs';
import vue from '@vitejs/plugin-vue';

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
  plugins: [
    vue({
      // template: {
      //   compilerOptions: {
      //     // 将所有带短横线的标签名都视为自定义元素
      //     isCustomElement: (tag) => tag.includes('coot-'),
      //   },
      // },
    }),
    dts(),
  ],
  build: {
    target: 'modules',
    emptyOutDir: true,
    lib: {
      entry: {
        ...componentEntries,
        index: './src/index.ts',
      },
      formats: ['es', 'cjs'],
      fileName: '[name]',
    },
    rollupOptions: {
      external: [/^coot-ui/, 'vue', '@vue/shared', '@vue/runtime-core'],
      output: {},
    },
  },
  resolve: {
    alias: Alias,
  },
});
