<template>
  <div class="button-display-container">
    <coot-button>Default</coot-button>
    <coot-button type="primary">Primary</coot-button>
    <coot-button type="outline">Outline</coot-button>
    <coot-button type="dashed">Dashed</coot-button>
    <coot-button type="text">Text</coot-button>
    <coot-button type="link">Link</coot-button>
  </div>
</template>

<script setup lang="ts">
import '@coot-ui/button';
</script>

<style scoped lang="less">
.button-display-container {
  display: flex;
  gap: 12px 16px;
}
</style>
