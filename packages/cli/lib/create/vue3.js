import path from 'path';
import { getVue3WrapperCode } from '../template/vue3.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const createVue3Wrapper = (name, content) => {
  const code = getVue3WrapperCode(content);
  const targetPath = path.resolve(
    __dirname,
    '../../../coot-ui-vue/src/components'
  );
  const targetDir = path.resolve(targetPath, `./${name}`);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
  }

  const indexFile = path.resolve(targetDir, './index.vue');
  fs.writeFileSync(indexFile, code, 'utf-8');
};
