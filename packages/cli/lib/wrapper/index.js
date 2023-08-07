import { cli } from '@custom-elements-manifest/analyzer/cli.js';
import { createVue3Wrapper } from './vue3.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const originComponentDir = path.resolve(__dirname, '../../../coot-ui');

export const wrapperComponent = async (name) => {
  const argv = [
    'analyze',
    '--litelement',
    '--globs',
    `./src/components/${name}`,
  ];
  const content = await cli({
    argv,
    noWrite: true,
    cwd: originComponentDir,
  });

  // 创建 vue3 文件
  createVue3Wrapper(name, content);
};
