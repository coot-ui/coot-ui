<template>
  <div class="button-display-container">
    <c-popper>
      <div>button</div>
      <template #content>111</template>
    </c-popper>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.button-display-container {
  display: flex;
  gap: 12px 16px;
}
</style>
