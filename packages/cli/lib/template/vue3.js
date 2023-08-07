import prettier from 'prettier';
import { pascalToKebab } from '../utils/index.js';

export const getVue3WrapperCode = (content) => {
  const module = content.modules[0];
  const declaration = module.declarations[0];
  // 组件名称
  const TagName = declaration.name.replace('Coot', '');
  const tag_name = pascalToKebab(TagName);
  // dispatch 事件
  // const events = (declaration.events || [])
  //   .map((event) => `'${event.name}'`)
  //   .join(', ');
  // props
  const propsType = (declaration.attributes || [])
    .map((attr) => `${attr.name}: ${attr.type.text};`)
    .join('\n');
  // props 默认值
  const defaultProps = (declaration.attributes || [])
    .map((attr) => `${attr.name}: ${attr.default},`)
    .join('\n');
  // 传递 props 和 events
  const attrsToPass = (declaration.attributes || [])
    .map((attr) => `:${attr.name}.prop="${attr.name}"`)
    .concat(
      (declaration.events || []).map(
        (event) =>
          `@${event.name}="(e: any) => $emit('${event.name}', e.detail)"`
      )
    )
    .join('\n');
  // 非基础类型
  const interfaces = (declaration.attributes || [])
    .map((attr) => attr.type.text)
    .filter((text) => text[0] >= 'A' && text[0] <= 'Z')
    .join(',');

  const vueFileWrapper = `
<template>
  <coot-${tag_name}
   ${attrsToPass}
  >
  </coot-${tag_name}>
</template>

<script setup lang="ts">
import 'coot-ui/${tag_name}';

defineOptions({
  name: 'C${TagName}',
});

${
  interfaces
    ? `import type { ${interfaces} } from 'coot-ui/dist/components/${tag_name}/type';`
    : ''
}

${
  propsType
    ? `
    interface Props {
      ${propsType}
    };`
    : ''
}

${
  defaultProps
    ? `
    withDefaults(defineProps<Props>(), {
      ${defaultProps}
    });`
    : ''
}
</script>
`;

  const tsFileWrapper = `
import ${TagName} from './index.vue';
import { withInstall } from '../../utils';

export const C${TagName} = withInstall(${TagName});
export default C${TagName};
  `;

  return [
    {
      name: 'index.vue',
      code: prettier.format(vueFileWrapper, {
        parser: 'vue',
        singleQuote: true,
      }),
    },
    {
      name: 'index.ts',
      code: prettier.format(tsFileWrapper, {
        parser: 'typescript',
        singleQuote: true,
      }),
    },
  ];
};
