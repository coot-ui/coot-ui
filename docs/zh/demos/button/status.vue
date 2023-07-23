<template>
  <div class="button-display-container">
    <coot-button>Default</coot-button>
    <coot-button type="primary">Primary</coot-button>
    <coot-button type="outline">Outline</coot-button>
    <coot-button type="dashed">Dashed</coot-button>
    <coot-button type="text">Text</coot-button>
    <coot-button type="link">Link</coot-button>
  </div>
  <div class="button-display-container">
    <coot-button status="success">Success</coot-button>
    <coot-button status="success" type="primary">Primary</coot-button>
    <coot-button status="success" type="outline">Outline</coot-button>
    <coot-button status="success" type="dashed">Dashed</coot-button>
    <coot-button status="success" type="text">Text</coot-button>
    <coot-button status="success" type="link">Link</coot-button>
  </div>
  <div class="button-display-container">
    <coot-button status="danger">Danger</coot-button>
    <coot-button status="danger" type="primary">Primary</coot-button>
    <coot-button status="danger" type="outline">Outline</coot-button>
    <coot-button status="danger" type="dashed">Dashed</coot-button>
    <coot-button status="danger" type="text">Text</coot-button>
    <coot-button status="danger" type="link">Link</coot-button>
  </div>
  <div class="button-display-container">
    <coot-button status="warning">Warning</coot-button>
    <coot-button status="warning" type="primary">Primary</coot-button>
    <coot-button status="warning" type="outline">Outline</coot-button>
    <coot-button status="warning" type="dashed">Dashed</coot-button>
    <coot-button status="warning" type="text">Text</coot-button>
    <coot-button status="warning" type="link">Link</coot-button>
  </div>
</template>

<script setup lang="ts">
import '@coot-ui/button';
</script>

<style scoped lang="less">
.button-display-container {
  display: flex;
  gap: 12px 16px;
  margin-bottom: 16px;
}
</style>
