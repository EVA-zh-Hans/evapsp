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
const detailLink = computed(
  () => `/${lang.value === 'en' ? 'en/' : ''}pages/games/${props.slug}`,
)
</script>

<template>
  <a class="game-card" :href="detailLink">
    <CoverImage class="game-card-cover" :slug="game.slug" :alt="game.nameZh" />
    <div class="game-card-body">
      <div class="game-card-head">
        <StatusBadge :status="game.status" />
        <span v-if="game.year" class="game-card-year">{{ game.year }}</span>
      </div>
      <h3 class="game-card-name">{{ pick(game.nameZh, game.nameEn) }}</h3>
      <p class="game-card-ja">{{ game.nameJa }}</p>
      <span class="game-card-more">{{ t('viewDetails') }} →</span>
    </div>
  </a>
</template>
