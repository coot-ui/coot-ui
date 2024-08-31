<template>
  <div>加载中</div>
  <div class="button-display-container">
    <c-button loading>Default</c-button>
    <c-button loading type="primary">Primary</c-button>
    <c-button loading type="secondary">Secondary</c-button>
    <c-button loading disabled type="dashed">Dashed</c-button>
    <c-button loading disabled type="text">Text</c-button>
    <c-button loading disabled type="link">Link</c-button>
  </div>
  <div>点击加载</div>
  <div class="button-display-container">
    <c-button :loading="defaultLoading" @click="handleClickDefault()"
      >Default</c-button
    >
    <c-button
      :loading="primaryLoading"
      @click="handleClickPrimary()"
      type="primary"
      >Primary</c-button
    >
    <c-button
      :loading="secondaryLoading"
      @click="handleClickSecondary()"
      type="secondary"
      >Secondary</c-button
    >
    <c-button
      icon="download"
      :loading="defaultIconLoading"
      @click="handleClickDefaultIcon()"
      >Default</c-button
    >
    <c-button
      icon="download"
      :loading="primaryIconLoading"
      @click="handleClickPrimaryIcon()"
      type="primary"
      >Primary</c-button
    >
    <c-button
      icon="download"
      :loading="secondaryIconLoading"
      @click="handleClickSecondaryIcon()"
      type="secondary"
      >Secondary</c-button
    >
  </div>
  <div>点击加载时固定宽度</div>
  <div class="button-display-container">
    <c-button
      :loading="defaultFixedLoading"
      loadingFixed
      @click="handleClickDefaultFixed()"
      >Default</c-button
    >
    <c-button
      :loading="primaryFixedLoading"
      loadingFixed
      type="primary"
      @click="handleClickPrimaryFixed()"
      >Primary</c-button
    >
    <c-button
      :loading="secondaryFixedLoading"
      loadingFixed
      type="secondary"
      @click="handleClickSecondaryFixed()"
      >Secondary</c-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
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

const secondaryLoading = ref(false);
const handleClickSecondary = () => {
  secondaryLoading.value = true;
  setTimeout(() => {
    secondaryLoading.value = false;
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

const secondaryIconLoading = ref(false);
const handleClickSecondaryIcon = () => {
  secondaryIconLoading.value = true;
  setTimeout(() => {
    secondaryIconLoading.value = false;
  }, 3000);
};

const defaultFixedLoading = ref(false);
const handleClickDefaultFixed = () => {
  defaultFixedLoading.value = true;
  setTimeout(() => {
    defaultFixedLoading.value = false;
  }, 3000);
};

const primaryFixedLoading = ref(false);
const handleClickPrimaryFixed = () => {
  primaryFixedLoading.value = true;
  setTimeout(() => {
    primaryFixedLoading.value = false;
  }, 3000);
};

const secondaryFixedLoading = ref(false);
const handleClickSecondaryFixed = () => {
  secondaryFixedLoading.value = true;
  setTimeout(() => {
    secondaryFixedLoading.value = false;
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
