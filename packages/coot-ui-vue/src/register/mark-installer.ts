import type { Plugin, App } from 'vue';

const INSTALLED_KEY = Symbol('coot_ui_installed');

export interface CootVueApp extends App {
  [INSTALLED_KEY]: boolean;
}

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: CootVueApp) => {
    if (app[INSTALLED_KEY]) return;

    app[INSTALLED_KEY] = true;
    components.forEach((c) => app.use(c));
  };

  return {
    install,
  };
};
