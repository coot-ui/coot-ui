<template>
  <div>带图标按钮</div>
  <div class="button-display-container">
    <coot-button icon="chevron-left"> Default </coot-button>
    <coot-button icon="download" type="primary"> Primary </coot-button>
    <coot-button icon="chevron-left" type="outline"> Outline </coot-button>
    <coot-button icon="chevron-left" type="dashed"> Dashed </coot-button>
    <coot-button icon="chevron-left" type="text"> Text </coot-button>
    <coot-button icon="chevron-left" type="link"> Link </coot-button>
  </div>
  <div>方形按钮</div>
  <div class="button-display-container">
    <coot-button icon="search" square> </coot-button>
    <coot-button icon="search" square type="primary"> </coot-button>
    <coot-button icon="search" square type="outline"> </coot-button>
    <coot-button icon="download" square type="dashed"> </coot-button>
    <coot-button icon="download" square type="text"> </coot-button>
    <coot-button icon="download" square type="link"> </coot-button>
  </div>
  <div>圆形按钮</div>
  <div class="button-display-container">
    <coot-button icon="search" circle> </coot-button>
    <coot-button icon="search" circle type="primary"> </coot-button>
    <coot-button icon="search" circle type="outline"> </coot-button>
    <coot-button icon="download" circle type="dashed"> </coot-button>
    <coot-button icon="download" circle type="text"> </coot-button>
    <coot-button icon="download" circle type="link"> </coot-button>
  </div>
</template>

<script setup lang="ts">
import '@coot-ui/button';
import '@coot-ui/icons/search';
import '@coot-ui/icons/download';
import '@coot-ui/icons/chevron-left';
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
