const defaultPrefix = 'coot';

const generateName = (
  prefix: string,
  block?: string,
  element?: string,
  modifier?: string
) => {
  let defaultName = block === '' ? `${prefix}` : `${prefix}-${block}`;
  if (element) defaultName += `_${element}`;
  if (modifier) defaultName += `-${modifier}`;
  return defaultName;
};

export const useNamespace = (block: string) => {
  const b = () => generateName(defaultPrefix, block);
  const e = (element: string = '') =>
    generateName(defaultPrefix, block, element);
  const m = (modifier: string = '') =>
    generateName(defaultPrefix, block, '', modifier);
  const em = (element: string = '', modifier: string = '') =>
    generateName(defaultPrefix, block, element, modifier);
  const bem = (_block?: string, element?: string, modifier?: string) =>
    generateName(defaultPrefix, _block, element, modifier);
  const is = (status: string) => `${defaultPrefix}-is-${status}`;
  return {
    b,
    e,
    m,
    em,
    bem,
    is,
  };
};
