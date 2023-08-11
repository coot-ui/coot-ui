<template>
  <div>常规按钮</div>
  <div class="button-display-container">
    <c-button>Default</c-button>
    <c-button type="primary">Primary</c-button>
    <c-button type="secondary">Secondary</c-button>
    <c-button type="dashed">Dashed</c-button>
    <c-button type="text">Text</c-button>
    <c-button type="link">Link</c-button>
  </div>
  <div>圆角按钮</div>
  <div class="button-display-container">
    <c-button round>Default</c-button>
    <c-button round type="primary">Primary</c-button>
    <c-button round type="secondary">Secondary</c-button>
    <c-button round type="dashed">Dashed</c-button>
    <c-button round type="text">Text</c-button>
    <c-button round type="link">Link</c-button>
  </div>
</template>

<script setup lang="ts">
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
