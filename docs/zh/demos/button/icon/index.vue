<template>
  <div>带图标按钮</div>
  <div class="button-display-container">
    <c-button icon="chevron-left"> Default </c-button>
    <c-button icon="download" type="primary"> Primary </c-button>
    <c-button icon="chevron-left" type="secondary"> Secondary </c-button>
    <c-button icon="chevron-left" type="dashed"> Dashed </c-button>
    <c-button icon="chevron-left" type="text"> Text </c-button>
    <c-button icon="chevron-left" type="link"> Link </c-button>
  </div>
  <div>方形按钮</div>
  <div class="button-display-container">
    <c-button icon="search" square> </c-button>
    <c-button icon="search" square type="primary"> </c-button>
    <c-button icon="search" square type="secondary"> </c-button>
    <c-button icon="download" square type="dashed"> </c-button>
    <c-button icon="download" square type="text"> </c-button>
    <c-button icon="download" square type="link"> </c-button>
  </div>
  <div>圆形按钮</div>
  <div class="button-display-container">
    <c-button icon="search" circle> </c-button>
    <c-button icon="search" circle type="primary"> </c-button>
    <c-button icon="search" circle type="secondary"> </c-button>
    <c-button icon="download" circle type="dashed"> </c-button>
    <c-button icon="download" circle type="text"> </c-button>
    <c-button icon="download" circle type="link"> </c-button>
  </div>
</template>

<script setup lang="ts">
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
