import path from 'path';
import { getVue3WrapperCode } from '../template/vue3.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const createVue3Wrapper = (name, content) => {
  const files = getVue3WrapperCode(content);
  const targetPath = path.resolve(
    __dirname,
    '../../../coot-ui-vue/src/components'
  );
  const targetDir = path.resolve(targetPath, `./${name}`);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
  }

  files.forEach((fileItem) => {
    const file = path.resolve(targetDir, `./${fileItem.name}`);
    fs.writeFileSync(file, fileItem.code, 'utf-8');
  });
};
