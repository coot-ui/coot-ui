<template>
  <div class="button-display-container">
    <coot-button long>Default</coot-button>
    <coot-button long type="primary">Primary</coot-button>
    <coot-button long type="secondary">Secondary</coot-button>
    <coot-button long type="dashed">Dashed</coot-button>
  </div>
</template>

<script setup lang="ts">
import 'coot-ui/button';
import '@coot-ui/icons/edit-3';
</script>

<style scoped lang="less">
.button-display-container {
  display: flex;
  flex-direction: column;
  gap: 12px 16px;
  margin-top: 4px;
  flex-wrap: wrap;
  &:first-of-type {
    margin-top: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
}
</style>
