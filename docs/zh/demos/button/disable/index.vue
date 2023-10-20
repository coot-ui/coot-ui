<template>
  <div class="button-display-container">
    <c-button disabled>Default</c-button>
    <c-button disabled type="primary">Primary</c-button>
    <c-button disabled type="secondary">Secondary</c-button>
    <c-button disabled type="dashed">Dashed</c-button>
    <c-button disabled type="text">Text</c-button>
    <c-button disabled type="link">Link</c-button>
  </div>
</template>

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
