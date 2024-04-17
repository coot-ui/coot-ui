// https://vitepress.dev/guide/custom-theme
import { h, ref } from 'vue';
import Theme from 'vitepress/theme';
import IconList from '../components/icon-list.vue';
import CodeLanguage from '../components/code-language.vue';
import './style.scss';
import { VitepressDemoBox } from 'vitepress-demo-box';
import 'vitepress-demo-box/dist/style.css';
import CootUI from '@coot-ui/vue';

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      'nav-bar-content-after': () => h(CodeLanguage),
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },

  enhanceApp({ app, router, siteData }) {
    const codeType = ref('html');
    const setCodeType = (type: string) => {
      codeType.value = type;
    };
    app.provide('coot-code-type', codeType);
    app.provide('set-coot-code-type', setCodeType);
    // ...
    app.config.compilerOptions.isCustomElement = (tag) => {
      return tag.startsWith('coot-');
    };
    app.component('icon-list', IconList);
    app.component('demo-box', VitepressDemoBox);
    app.use(CootUI);
  },
};
