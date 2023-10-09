import { defineConfig } from 'vitepress';
import { markdownDemo } from 'vitepress-demo-box';
import path from 'path';

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
    outline: [2, 3],
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
      md.use(markdownDemo, {
        demoRoot: path.resolve(__dirname, '../demos'),
      });
    },
  },
  vite: {},
});
