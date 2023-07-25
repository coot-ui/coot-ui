<template>
  <div style="position: relative">
    <div class="icon-list">
      <div class="icon-item" v-for="name in list" :key="name">
        <div
          class="icon-display-box"
          v-html="`<coot-icon-${name}></coot-icon-${name}>`"
        ></div>
        <div class="icon-name">{{ name }}</div>
      </div>
      <div
        v-for="(item, index) in Array(10)"
        :key="index"
        class="icon-item"
        style="visibility: hidden; height: 0; padding: 0; border-bottom: none"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import '../../../../packages/coot-icon/dist/index.mjs';

const list = ref([]);

onMounted(() => {
  const files = import.meta.globEager(
    '../../../../packages/coot-icon/dist/*.mjs'
  );

  const names = Object.keys(files).map((file) => {
    const segs = file.split('/');
    const name = segs[segs.length - 1].replace('.mjs', '');
    return name;
  });
  list.value = names;
});
</script>

<style scoped>
.icon-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  border-collapse: collapse;
  border-left: 1px solid var(--coot-color-border);
  border-top: 1px solid var(--coot-color-border);
}

.icon-item {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  min-width: 120px;
  padding: 12px 0;
  border-bottom: 1px solid var(--coot-color-border);
  border-right: 1px solid var(--coot-color-border);
  cursor: pointer;
}
.icon-display-box {
  font-size: 32px;
}
.icon-name {
  font-size: 12px;
}
</style>
