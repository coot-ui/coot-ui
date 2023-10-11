<template>
  <coot-popper>
    <slot></slot>
    <slot name="content" slot="content"></slot>
  </coot-popper>
</template>

<script setup lang="ts">
import 'coot-ui/popper';

defineOptions({
  name: 'CPopper',
});
</script>
