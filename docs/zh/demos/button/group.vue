<template>
  <div class="button-display-container">
    <coot-button-group>
      <coot-button>Add</coot-button>
      <coot-button>Edit</coot-button>
      <coot-button>Confirm</coot-button>
      <coot-button>Delete</coot-button>
    </coot-button-group>
  </div>

  <div class="button-display-container">
    <coot-button-group>
      <coot-button type="primary">Add</coot-button>
      <coot-button type="primary">Edit</coot-button>
      <coot-button type="primary">Confirm</coot-button>
      <coot-button type="primary">Delete</coot-button>
    </coot-button-group>
  </div>

  <div class="button-display-container">
    <coot-button-group>
      <coot-button type="secondary">Add</coot-button>
      <coot-button type="secondary">Edit</coot-button>
      <coot-button type="secondary">Confirm</coot-button>
      <coot-button type="secondary">Delete</coot-button>
    </coot-button-group>
  </div>

  <div class="button-display-container">
    <coot-button-group>
      <coot-button icon="chevron-left" type="primary" round>Prev</coot-button>
      <coot-button type="primary" round>
        Next<coot-icon-chevron-right></coot-icon-chevron-right>
      </coot-button>
    </coot-button-group>
  </div>

  <div class="button-display-container">
    <coot-button-group>
      <coot-button icon="chevron-left" type="primary" square></coot-button>
      <coot-button icon="search" type="primary" square></coot-button>
      <coot-button icon="download" type="primary" square></coot-button>
      <coot-button icon="chevron-right" type="primary" square></coot-button>
    </coot-button-group>
  </div>

  <div class="button-display-container">
    <coot-button-group>
      <coot-button type="primary">Action</coot-button>
      <coot-button icon="chevron-down" type="primary" square></coot-button>
    </coot-button-group>
  </div>
</template>

<script setup lang="ts">
import 'coot-ui/button';
import 'coot-ui/button-group';
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
