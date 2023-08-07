<template>
  <coot-button-group>
    <slot></slot>
  </coot-button-group>
</template>

<script setup lang="ts">
import 'coot-ui/button-group';

defineOptions({
  name: 'CButtonGroup',
});
</script>
