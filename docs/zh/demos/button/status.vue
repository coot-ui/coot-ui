<template>
  <div class="button-display-container">
    <coot-button>Default</coot-button>
    <coot-button type="primary">Primary</coot-button>
    <coot-button type="secondary">Secondary</coot-button>
    <coot-button type="dashed">Dashed</coot-button>
    <coot-button type="text">Text</coot-button>
    <coot-button type="link">Link</coot-button>
  </div>
  <div class="button-display-container">
    <coot-button status="success">Default</coot-button>
    <coot-button status="success" type="primary">Primary</coot-button>
    <coot-button status="success" type="secondary">Secondary</coot-button>
    <coot-button status="success" type="dashed">Dashed</coot-button>
    <coot-button status="success" type="text">Text</coot-button>
    <coot-button status="success" type="link">Link</coot-button>
  </div>
  <div class="button-display-container">
    <coot-button status="danger">Default</coot-button>
    <coot-button status="danger" type="primary">Primary</coot-button>
    <coot-button status="danger" type="secondary">Secondary</coot-button>
    <coot-button status="danger" type="dashed">Dashed</coot-button>
    <coot-button status="danger" type="text">Text</coot-button>
    <coot-button status="danger" type="link">Link</coot-button>
  </div>
  <div class="button-display-container">
    <coot-button status="warning">Default</coot-button>
    <coot-button status="warning" type="primary">Primary</coot-button>
    <coot-button status="warning" type="secondary">Secondary</coot-button>
    <coot-button status="warning" type="dashed">Dashed</coot-button>
    <coot-button status="warning" type="text">Text</coot-button>
    <coot-button status="warning" type="link">Link</coot-button>
  </div>
</template>

<script setup lang="ts">
import 'coot-ui/dist/components/button';
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
