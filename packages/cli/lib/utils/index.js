// ButtonGroup -> button-group
export function pascalToKebab(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // 在大写字母前添加连字符
    .toLowerCase(); // 将开头的大写字母改为小写
}
