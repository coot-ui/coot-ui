<template>
  <coot-button-group :size.prop="size">
    <slot></slot>
  </coot-button-group>
</template>

<script setup lang="ts">
import 'coot-ui/button-group';

import type { ButtonSize } from 'coot-ui/dist/components/button/type';

defineOptions({
  name: 'CButtonGroup',
});

interface Props {
  size: ButtonSize;
}

withDefaults(defineProps<Props>(), {
  size: 'default',
});
</script>
