let counter = 0;

export function uniqueId(prefix = '') {
  counter++;
  return prefix + counter;
}
