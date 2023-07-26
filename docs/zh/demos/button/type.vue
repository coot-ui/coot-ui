<template>
  <div>常规按钮</div>
  <div class="button-display-container">
    <coot-button>Default</coot-button>
    <coot-button type="primary">Primary</coot-button>
    <coot-button type="outline">Outline</coot-button>
    <coot-button type="dashed">Dashed</coot-button>
    <coot-button type="text">Text</coot-button>
    <coot-button type="link">Link</coot-button>
  </div>
  <div>圆角按钮</div>
  <div class="button-display-container">
    <coot-button round>Default</coot-button>
    <coot-button round type="primary">Primary</coot-button>
    <coot-button round type="outline">Outline</coot-button>
    <coot-button round type="dashed">Dashed</coot-button>
    <coot-button round type="text">Text</coot-button>
    <coot-button round type="link">Link</coot-button>
  </div>
</template>

<script setup lang="ts">
import '@coot-ui/button';
import '@coot-ui/icons/edit-3';
</script>

<style scoped lang="less">
.button-display-container {
  display: flex;
  gap: 12px 16px;
  margin-bottom: 16px;
  margin-top: 4px;
  flex-wrap: wrap;
  flex-wrap: wrap;
  &:first-of-type {
    margin-top: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
}
</style>
