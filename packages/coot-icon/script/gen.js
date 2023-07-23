const fs = require('fs');
const path = require('path');

const svgCode = fs.readFileSync(
  path.resolve(__dirname, '../svg/activity.svg'),
  'utf-8'
);

console.log(svgCode);
