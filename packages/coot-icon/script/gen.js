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
    .replace('width="24"', '?spin=${this.spin}\n  width="1em"')
    .replace('height="24"', 'height="1em"')
    .split('\n')
    .map((line) => `      ${line}`)
    .join('\n');
  importCode += `import './icons/${filename}';\n`;
  const res = `import { LitElement, html, css, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import styles from '../style.scss?inline';
import { defineElement } from '../utils';

@defineElement('coot-icon-${filename}')
export class CootIcon${camelName} extends LitElement {
  @property({ type: Boolean })
  spin = false;

  static styles = css\`
    \${unsafeCSS(styles)}
  \`;

  render() {
    return html\`${code.trimStart()} \`;
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
