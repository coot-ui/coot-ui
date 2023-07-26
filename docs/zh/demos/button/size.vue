<template>
  <p class="label">large</p>
  <div class="button-display-container">
    <coot-button size="large">Default</coot-button>
    <coot-button size="large" type="primary">Primary</coot-button>
    <coot-button size="large" type="outline">Outline</coot-button>
    <coot-button size="large" type="dashed">Dashed</coot-button>
    <coot-button size="large" type="text">Text</coot-button>
    <coot-button size="large" type="link">Link</coot-button>
  </div>
  <p class="label">default</p>
  <div class="button-display-container">
    <coot-button>Default</coot-button>
    <coot-button type="primary">Primary</coot-button>
    <coot-button type="outline">Outline</coot-button>
    <coot-button type="dashed">Dashed</coot-button>
    <coot-button type="text">Text</coot-button>
    <coot-button type="link">Link</coot-button>
  </div>
  <p class="label">small</p>
  <div class="button-display-container">
    <coot-button size="small">Default</coot-button>
    <coot-button size="small" type="primary">Primary</coot-button>
    <coot-button size="small" type="outline">Outline</coot-button>
    <coot-button size="small" type="dashed">Dashed</coot-button>
    <coot-button size="small" type="text">Text</coot-button>
    <coot-button size="small" type="link">Link</coot-button>
  </div>
  <p class="label">mini</p>
  <div class="button-display-container">
    <coot-button size="mini">Default</coot-button>
    <coot-button size="mini" type="primary">Primary</coot-button>
    <coot-button size="mini" type="outline">Outline</coot-button>
    <coot-button size="mini" type="dashed">Dashed</coot-button>
    <coot-button size="mini" type="text">Text</coot-button>
    <coot-button size="mini" type="link">Link</coot-button>
  </div>
</template>

<script setup lang="ts">
import '@coot-ui/button';
</script>

<style scoped lang="less">
.button-display-container {
  display: flex;
  align-items: center;
  gap: 12px 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  margin-top: 4px;
  &:first-of-type {
    margin-top: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
}
</style>
