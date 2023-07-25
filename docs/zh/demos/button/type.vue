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
  <div>带图标按钮</div>
  <div class="button-display-container">
    <coot-button>
      <coot-icon-edit-3></coot-icon-edit-3>
      Default
    </coot-button>
    <coot-button type="primary">
      <coot-icon-edit-3></coot-icon-edit-3>
      Primary
    </coot-button>
    <coot-button type="outline">
      <coot-icon-edit-3></coot-icon-edit-3>
      Outline
    </coot-button>
    <coot-button type="dashed">
      <coot-icon-edit-3></coot-icon-edit-3>
      Dashed
    </coot-button>
    <coot-button type="text">
      <coot-icon-edit-3></coot-icon-edit-3>
      Text
    </coot-button>
    <coot-button type="link">
      <coot-icon-edit-3></coot-icon-edit-3>
      Link
    </coot-button>
  </div>
  <div>方形按钮</div>
  <div class="button-display-container">
    <coot-button square>
      <coot-icon-edit-3></coot-icon-edit-3>
    </coot-button>
    <coot-button square type="primary">
      <coot-icon-edit-3></coot-icon-edit-3>
    </coot-button>
    <coot-button square type="outline">
      <coot-icon-edit-3></coot-icon-edit-3>
    </coot-button>
    <coot-button square type="dashed">
      <coot-icon-edit-3></coot-icon-edit-3>
    </coot-button>
    <coot-button square type="text">
      <coot-icon-edit-3></coot-icon-edit-3>
    </coot-button>
    <coot-button square type="link">
      <coot-icon-edit-3></coot-icon-edit-3>
    </coot-button>
  </div>
  <div>圆形按钮</div>
  <div class="button-display-container">
    <coot-button circle>
      <coot-icon-edit-3></coot-icon-edit-3>
    </coot-button>
    <coot-button circle type="primary">
      <coot-icon-edit-3></coot-icon-edit-3>
    </coot-button>
    <coot-button circle type="outline">
      <coot-icon-edit-3></coot-icon-edit-3>
    </coot-button>
    <coot-button circle type="dashed">
      <coot-icon-edit-3></coot-icon-edit-3>
    </coot-button>
    <coot-button circle type="text">
      <coot-icon-edit-3></coot-icon-edit-3>
    </coot-button>
    <coot-button circle type="link">
      <coot-icon-edit-3></coot-icon-edit-3>
    </coot-button>
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
}
</style>
