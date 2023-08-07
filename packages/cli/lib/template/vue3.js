import prettier from 'prettier';

export const getVue3WrapperCode = (content) => {
  const module = content.modules[0];
  const declaration = module.declarations[0];
  // 组件名称
  const tagName = declaration.tagName.replace('coot-', '');
  // dispatch 事件
  const events = (declaration.events || [])
    .map((event) => `'${event.name}'`)
    .join(', ');
  // props
  const propsType = (declaration.attributes || [])
    .map((attr, index) => `${attr.name}: ${attr.type.text};`)
    .join('\n');
  // props 默认值
  const defaultProps = (declaration.attributes || [])
    .map((attr, index) => `${attr.name}: ${attr.default},`)
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

  const wrapper = `
<template>
  <coot-${tagName}
   ${attrsToPass}
  >
  </coot-${tagName}>
</template>

<script setup lang="ts">
import 'coot-ui/${tagName}';
import type { ${interfaces} } from 'coot-ui/dist/components/${tagName}/type';

interface Props {
  ${propsType}
};

withDefaults(defineProps<Props>(), {
  ${defaultProps}
});
</script>
`;

  return prettier.format(wrapper, { parser: 'vue' });
};
