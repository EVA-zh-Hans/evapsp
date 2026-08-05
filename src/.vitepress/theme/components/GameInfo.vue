<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '../labels'
import { useGames } from '../useGames'
import CoverImage from './CoverImage.vue'
import StatusBadge from './StatusBadge.vue'

const props = defineProps<{ slug: string }>()
const { t, pick, lang } = useI18n()
const { bySlug } = useGames()
const game = bySlug(props.slug)!
const displayName = computed(() => pick(game.nameZh, game.nameEn))
const primary = computed(() => game.releases?.[0])
</script>

<template>
  <div class="game-info">
    <div class="game-info-cover">
      <CoverImage :slug="game.slug" :alt="game.nameZh" />
    </div>
    <div class="game-info-main">
      <div class="game-info-head">
        <StatusBadge :status="game.status" />
        <span v-if="game.year" class="game-info-year">{{ game.year }}</span>
      </div>
      <h1 class="game-info-name">{{ displayName }}</h1>
      <p class="game-info-ja">{{ game.nameJa }}</p>
      <p v-if="lang !== 'en'" class="game-info-en">{{ game.nameEn }}</p>
      <div class="game-info-actions">
        <a
          v-if="primary"
          class="game-btn game-btn-primary"
          :href="primary.url"
          target="_blank"
          rel="noopener"
        >
          ⬇ {{ t('download') }} {{ primary.file }}
        </a>
        <a
          v-if="game.repoUrl"
          class="game-btn"
          :href="game.repoUrl"
          target="_blank"
          rel="noopener"
        >
          {{ t('visitRepo') }}
        </a>
      </div>
    </div>
  </div>
</template>
