// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import Theme from 'vitepress/theme';
// import HomeHeroAfter from '../components/home-hero-after.vue';
import IconList from '../components/icon-list.vue';
import './style.css';
import { VitepressDemoBox } from 'vitepress-demo-box';
import 'vitepress-demo-box/dist/style.css';
import '../../../../packages/coot-ui/src/style/index.scss';

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // 'home-features-after': () => h(HomeHeroAfter),
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },

  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('icon-list', IconList);
    app.component('demo-box', VitepressDemoBox);
  },
};
