<template>
  <div class="code-language-switch text">
    <div class="code-language-label">{{ codeType }}</div>
    <svg
      data-v-9983eb53=""
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      class="text-icon"
    >
      <path
        d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"
      ></path>
    </svg>
    <div class="menu">
      <div class="VPMenu">
        <div
          v-for="item in menus"
          :key="item"
          :class="['VPLink', codeType === item && 'VPLink-active']"
          @click="(setCodeType as any)(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const menus = ['html', 'lit', 'vue', 'react'];

const codeType = inject('coot-code-type');
const setCodeType = inject<(type: string) => void>('set-coot-code-type');
</script>

<style scoped lang="less">
.code-language-switch {
  display: flex;
  align-items: center;
  line-height: var(--vp-nav-height);
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  transition: color 0.25s;
  position: relative;
  cursor: pointer;
  &:hover {
    color: var(--vp-c-text-2);
  }
  &::before {
    margin-right: 16px;
    margin-left: 16px;
    width: 1px;
    height: 24px;
    background-color: var(--vp-c-divider);
    content: '';
    display: block;
  }
  .menu {
    position: absolute;
    top: calc(var(--vp-nav-height) / 2 + 20px);
    right: 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.25s, visibility 0.25s, transform 0.25s;
    .VPMenu {
      border-radius: 12px;
      padding: 12px;
      min-width: 128px;
      border: 1px solid var(--vp-c-divider);
      background-color: var(--vp-c-bg-elv);
      box-shadow: var(--vp-shadow-3);
      transition: background-color 0.5s;
      max-height: calc(100vh - var(--vp-nav-height));
      overflow-y: auto;
      .VPLink {
        display: block;
        border-radius: 6px;
        padding: 0 12px;
        line-height: 32px;
        font-size: 14px;
        font-weight: 500;
        color: var(--vp-c-text-1);
        white-space: nowrap;
        transition: background-color 0.25s, color 0.25s;
        &:not(.VPLink-active):hover {
          color: var(--vp-c-brand);
          background-color: var(--vp-c-bg-elv-mute);
        }
      }
      .VPLink-active {
        font-weight: bold;
      }
    }
  }
  &:hover {
    .menu {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
