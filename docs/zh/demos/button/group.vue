<template>
  <div class="button-display-container">
    <c-button-group>
      <c-button>Add</c-button>
      <c-button>Edit</c-button>
      <c-button>Confirm</c-button>
      <c-button>Delete</c-button>
    </c-button-group>
  </div>

  <div class="button-display-container">
    <c-button-group>
      <c-button type="primary">Add</c-button>
      <c-button type="primary">Edit</c-button>
      <c-button type="primary">Confirm</c-button>
      <c-button type="primary">Delete</c-button>
    </c-button-group>
  </div>

  <div class="button-display-container">
    <c-button-group>
      <c-button type="secondary">Add</c-button>
      <c-button type="secondary">Edit</c-button>
      <c-button type="secondary">Confirm</c-button>
      <c-button type="secondary">Delete</c-button>
    </c-button-group>
  </div>

  <div class="button-display-container">
    <c-button-group>
      <c-button icon="chevron-left" type="primary" round>Prev</c-button>
      <c-button type="primary" round>
        Next<coot-icon-chevron-right></coot-icon-chevron-right>
      </c-button>
    </c-button-group>
  </div>

  <div class="button-display-container">
    <c-button-group>
      <c-button icon="chevron-left" type="primary" square></c-button>
      <c-button icon="search" type="primary" square></c-button>
      <c-button icon="download" type="primary" square></c-button>
      <c-button icon="chevron-right" type="primary" square></c-button>
    </c-button-group>
  </div>

  <div class="button-display-container">
    <c-button-group size="small">
      <c-button type="primary">Action</c-button>
      <c-button icon="chevron-down" type="primary" square></c-button>
    </c-button-group>
  </div>
</template>

<script setup lang="ts">
import '@coot-ui/icons/chevron-left';
import '@coot-ui/icons/chevron-right';
import '@coot-ui/icons/search';
import '@coot-ui/icons/download';
import '@coot-ui/icons/chevron-down';
</script>

<style scoped lang="scss">
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
