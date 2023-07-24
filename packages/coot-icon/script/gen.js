const fs = require('fs');
const path = require('path');

const files = fs
  .readdirSync(path.resolve(__dirname, '../src/svg'), 'utf-8')
  .map((file) => {
    const fileObj = path.parse(file);
    return fileObj.name;
  });

let importCode = '';

const genContent = (filename) => {
  const svgCode = fs.readFileSync(
    path.resolve(__dirname, `../src/svg/${filename}.svg`),
    'utf-8'
  );
  const camelName = filename
    .replace(/[-_](.)/g, function (match, group1) {
      return group1.toUpperCase();
    })
    .replace(/^\w/, (c) => c.toUpperCase());
  const code = svgCode
    .split('\n')
    .filter(
      (item) => !item.includes('width="') && !item.includes('height="') && item
    )
    .map((line) => `      ${line}`)
    .join('\n');
  importCode += `import './icons/${filename}';\n`;
  const res = `import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CootIcon } from '../components/coot-icon';

@customElement('coot-icon-${filename}')
export class CootIcon${camelName} extends CootIcon {
  render() {
    return html\`<coot-icon size=\${this.size} color=\${this.color}>
${code}
    </coot-icon>\`;
  }
}
`;

  fs.writeFileSync(
    path.resolve(__dirname, `../src/icons/${filename}.ts`),
    res,
    'utf-8'
  );
};

files.forEach((file) => {
  genContent(file);
});

fs.writeFileSync(
  path.resolve(__dirname, `../src/index.ts`),
  importCode,
  'utf-8'
);
