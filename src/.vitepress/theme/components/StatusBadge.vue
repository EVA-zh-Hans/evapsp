<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '../labels'

const props = defineProps<{ status: string }>()
const { t } = useI18n()
const label = computed(() => t(`status.${props.status}`))
</script>

<template>
  <span class="status-badge" :class="`status-${status}`">{{ label }}</span>
</template>
