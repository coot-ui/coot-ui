import { defineConfig } from 'vitepress';
import { markdownDemo } from 'vitepress-demo-box';
import path from 'path';
import fs from 'fs';
import { Alias } from '../../../packages/coot-ui/vite.config';
// import vue from '@vitejs/plugin-vue';

// 开发环境下，将 @coot-ui/xxx 映射到 coot-ui 目录下对应组件
function getComponentsAlias() {
  const compAlias = { ...Alias };
  fs.readdirSync(
    path.resolve(__dirname, '../../../packages/coot-ui/src/components'),
    'utf-8'
  )
    .map((file) => {
      const fileObj = path.parse(file);
      return fileObj.name;
    })
    .forEach((name) => {
      compAlias[`coot-ui/${name}`] = path.resolve(
        __dirname,
        '../../../packages/coot-ui/src/components/' + name
      );
    });
  return compAlias;
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Coot UI',
  description: "Locate dom's source code in IDE",
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    // nav: [{ text: '首页', link: '/' }],
    search: {
      provider: 'local',
    },
    secondary: [2, 3],
    sidebar: [
      {
        text: '通用',
        items: [
          { text: 'Icon 图标', link: '/components/icon.md' },
          { text: 'Button 按钮', link: '/components/button.md' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zh-lx/code-inspector' },
    ],
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
    },
    fr: {
      label: 'English',
      lang: 'en',
      link: 'https://en.inspector.fe-dev.cn', // default /fr/ -- shows on navbar translations menu, can be external
    },
  },
  markdown: {
    config(md) {
      md.use(markdownDemo);
    },
  },
  vite: {
    resolve: {
      alias: {
        ...getComponentsAlias(),
      },
    },
    // plugins: [
    //   vue({
    //     template: {
    //       compilerOptions: {
    //         // 将所有带短横线的标签名都视为自定义元素
    //         isCustomElement: (tag) => tag.includes('wc-'),
    //       },
    //     },
    //   }),
    // ],
  },
});
