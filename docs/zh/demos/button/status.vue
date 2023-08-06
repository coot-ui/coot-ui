<template>
  <div class="button-display-container">
    <c-button>Default</c-button>
    <c-button type="primary">Primary</c-button>
    <c-button type="secondary">Secondary</c-button>
    <c-button type="dashed">Dashed</c-button>
    <c-button type="text">Text</c-button>
    <c-button type="link">Link</c-button>
  </div>
  <div class="button-display-container">
    <c-button status="success">Default</c-button>
    <c-button status="success" type="primary">Primary</c-button>
    <c-button status="success" type="secondary">Secondary</c-button>
    <c-button status="success" type="dashed">Dashed</c-button>
    <c-button status="success" type="text">Text</c-button>
    <c-button status="success" type="link">Link</c-button>
  </div>
  <div class="button-display-container">
    <c-button status="danger">Default</c-button>
    <c-button status="danger" type="primary">Primary</c-button>
    <c-button status="danger" type="secondary">Secondary</c-button>
    <c-button status="danger" type="dashed">Dashed</c-button>
    <c-button status="danger" type="text">Text</c-button>
    <c-button status="danger" type="link">Link</c-button>
  </div>
  <div class="button-display-container">
    <c-button status="warning">Default</c-button>
    <c-button status="warning" type="primary">Primary</c-button>
    <c-button status="warning" type="secondary">Secondary</c-button>
    <c-button status="warning" type="dashed">Dashed</c-button>
    <c-button status="warning" type="text">Text</c-button>
    <c-button status="warning" type="link">Link</c-button>
  </div>
</template>

<script setup lang="ts">
import { CButton } from '@coot-ui/vue';
</script>

<style scoped lang="less">
.button-display-container {
  display: flex;
  gap: 12px 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  &:first-of-type {
    margin-top: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
}
</style>
