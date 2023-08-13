<template>
  <div class="button-display-container">
    <coot-icon-activity></coot-icon-activity>
    <coot-icon-search></coot-icon-search>
    <coot-icon-calendar></coot-icon-calendar>
    <coot-icon-copy></coot-icon-copy>
    <coot-icon-box></coot-icon-box>
  </div>
</template>

<script setup lang="ts">
import '@coot-ui/icons/activity';
import '@coot-ui/icons/search';
import '@coot-ui/icons/calendar';
import '@coot-ui/icons/copy';
import '@coot-ui/icons/box';
</script>

<style scoped lang="less">
.button-display-container {
  display: flex;
  gap: 12px 16px;
}
</style>
