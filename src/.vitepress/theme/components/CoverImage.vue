<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { withBase } from 'vitepress'
import { useI18n } from '../labels'

const props = defineProps<{ slug: string; src?: string; alt?: string }>()
const { t } = useI18n()
const failed = ref(false)
const src = computed(() => withBase(props.src ?? `/covers/${props.slug}.jpg`))
watch(() => props.src, () => { failed.value = false })
const onError = () => { failed.value = true }
</script>

<template>
  <div class="cover">
    <img
      v-if="!failed"
      :src="src"
      :alt="alt || t('coverAlt')"
      loading="lazy"
      @error="onError"
    />
    <div v-else class="cover-placeholder" role="img" :aria-label="alt || t('coverAlt')">
      <span class="cover-placeholder-mark">EVA</span>
      <span class="cover-placeholder-text">{{ alt || t('coverAlt') }}</span>
    </div>
  </div>
</template>
