<template>
  <coot-button
    :type.prop="type"
    :status.prop="status"
    :size.prop="size"
    :round.prop="round"
    :circle.prop="circle"
    :square.prop="square"
    :disabled.prop="disabled"
    :loading.prop="loading"
    :loadingFixed.prop="loadingFixed"
    :long.prop="long"
    :icon.prop="icon"
    @testEvent="(e: any) => $emit('testEvent', e.detail)"
  >
    <slot name="icon" slot="icon"></slot>
    <slot></slot>
  </coot-button>
</template>

<script setup lang="ts">
import 'coot-ui/button';

defineOptions({
  name: 'CButton',
});

import type {
  ButtonType,
  ButtonStatus,
  ButtonSize,
} from 'coot-ui/dist/components/button/type';

interface Props {
  type: ButtonType;
  status: ButtonStatus;
  size: ButtonSize;
  round: boolean;
  circle: boolean;
  square: boolean;
  disabled: boolean;
  loading: boolean;
  loadingFixed: boolean;
  long: boolean;
  icon: string;
}

withDefaults(defineProps<Props>(), {
  type: 'default',
  status: 'primary',
  size: 'default',
  round: false,
  circle: false,
  square: false,
  disabled: false,
  loading: false,
  loadingFixed: false,
  long: false,
  icon: '',
});
</script>
