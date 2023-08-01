<template>
  <div>加载中</div>
  <div class="button-display-container">
    <coot-button loading>Default</coot-button>
    <coot-button loading type="primary">Primary</coot-button>
    <coot-button loading type="outline">Outline</coot-button>
    <coot-button loading disabled type="dashed">Dashed</coot-button>
    <coot-button loading disabled type="text">Text</coot-button>
    <coot-button loading disabled type="link">Link</coot-button>
  </div>
  <div>点击加载</div>
  <div class="button-display-container">
    <coot-button :loading="defaultLoading" @click="handleClickDefault()"
      >Default</coot-button
    >
    <coot-button
      :loading="primaryLoading"
      @click="handleClickPrimary()"
      type="primary"
      >Primary</coot-button
    >
    <coot-button
      :loading="outlineLoading"
      @click="handleClickOutline()"
      type="outline"
      >Outline</coot-button
    >
    <coot-button
      icon="download"
      :loading="defaultIconLoading"
      @click="handleClickDefaultIcon()"
      >Default</coot-button
    >
    <coot-button
      icon="download"
      :loading="primaryIconLoading"
      @click="handleClickPrimaryIcon()"
      type="primary"
      >Primary</coot-button
    >
    <coot-button
      icon="download"
      :loading="outlineIconLoading"
      @click="handleClickOutlineIcon()"
      type="outline"
      >Outline</coot-button
    >
  </div>
  <div>点击加载时固定宽度</div>
  <div class="button-display-container">
    <coot-button
      :loading="defaultFixedLoading"
      loadingFixed
      type="primary"
      @click="handleClickDefaultFixed()"
      >Default</coot-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import '@coot-ui/button';
import '@coot-ui/icons/download';

const defaultLoading = ref(false);
const handleClickDefault = () => {
  defaultLoading.value = true;
  setTimeout(() => {
    defaultLoading.value = false;
  }, 3000);
};

const primaryLoading = ref(false);
const handleClickPrimary = () => {
  primaryLoading.value = true;
  setTimeout(() => {
    primaryLoading.value = false;
  }, 3000);
};

const outlineLoading = ref(false);
const handleClickOutline = () => {
  outlineLoading.value = true;
  setTimeout(() => {
    outlineLoading.value = false;
  }, 3000);
};

const defaultIconLoading = ref(false);
const handleClickDefaultIcon = () => {
  defaultIconLoading.value = true;
  setTimeout(() => {
    defaultIconLoading.value = false;
  }, 3000);
};

const primaryIconLoading = ref(false);
const handleClickPrimaryIcon = () => {
  primaryIconLoading.value = true;
  setTimeout(() => {
    primaryIconLoading.value = false;
  }, 3000);
};

const outlineIconLoading = ref(false);
const handleClickOutlineIcon = () => {
  outlineIconLoading.value = true;
  setTimeout(() => {
    outlineIconLoading.value = false;
  }, 3000);
};

const defaultFixedLoading = ref(false);
const handleClickDefaultFixed = () => {
  defaultFixedLoading.value = true;
  setTimeout(() => {
    defaultFixedLoading.value = false;
  }, 3000);
};
</script>

<style scoped lang="less">
.button-display-container {
  display: flex;
  gap: 12px 16px;
  margin-bottom: 16px;
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
