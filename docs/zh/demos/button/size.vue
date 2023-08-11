<template>
  <p class="label">large</p>
  <div class="button-display-container">
    <c-button size="large">Default</c-button>
    <c-button size="large" type="primary">Primary</c-button>
    <c-button size="large" type="secondary">Secondary</c-button>
    <c-button size="large" type="dashed">Dashed</c-button>
    <c-button size="large" type="text">Text</c-button>
    <c-button size="large" type="link">Link</c-button>
  </div>
  <p class="label">default</p>
  <div class="button-display-container">
    <c-button>Default</c-button>
    <c-button type="primary">Primary</c-button>
    <c-button type="secondary">Secondary</c-button>
    <c-button type="dashed">Dashed</c-button>
    <c-button type="text">Text</c-button>
    <c-button type="link">Link</c-button>
  </div>
  <p class="label">small</p>
  <div class="button-display-container">
    <c-button size="small">Default</c-button>
    <c-button size="small" type="primary">Primary</c-button>
    <c-button size="small" type="secondary">Secondary</c-button>
    <c-button size="small" type="dashed">Dashed</c-button>
    <c-button size="small" type="text">Text</c-button>
    <c-button size="small" type="link">Link</c-button>
  </div>
  <p class="label">mini</p>
  <div class="button-display-container">
    <c-button size="mini">Default</c-button>
    <c-button size="mini" type="primary">Primary</c-button>
    <c-button size="mini" type="secondary">Secondary</c-button>
    <c-button size="mini" type="dashed">Dashed</c-button>
    <c-button size="mini" type="text">Text</c-button>
    <c-button size="mini" type="link">Link</c-button>
  </div>
</template>

<script setup lang="ts"></script>

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
