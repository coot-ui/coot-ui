<template>
  <div class="button-display-container">
    <c-button long>Default</c-button>
    <c-button long type="primary">Primary</c-button>
    <c-button long type="secondary">Secondary</c-button>
    <c-button long type="dashed">Dashed</c-button>
  </div>
</template>

<script setup lang="ts">
import { CButton } from '@coot-ui/vue';
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
