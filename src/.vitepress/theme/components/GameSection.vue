<script setup lang="ts">
import { useI18n } from '../labels'
import { useGames } from '../useGames'
import GameCard from './GameCard.vue'

const props = defineProps<{
  status: 'done' | 'working' | 'planned' | 'not-planned'
}>()
const { t, pick } = useI18n()
const { byStatus } = useGames()
const items = byStatus(props.status)
</script>

<template>
  <section class="game-section">
    <h2 class="game-section-title">{{ t(`status.${status}`) }}</h2>
    <p v-if="status === 'planned'" class="game-section-empty">{{ t('emptyPlanned') }}</p>
    <div v-else-if="status === 'not-planned'" class="game-section-rows">
      <div v-for="g in items" :key="g.slug" class="game-row">
        <div class="game-row-main">
          <span class="game-row-name">{{ pick(g.nameZh, g.nameEn) }}</span>
          <span class="game-row-ja">{{ g.nameJa }}</span>
        </div>
        <span v-if="g.year" class="game-row-year">{{ g.year }}</span>
        <span class="game-row-serials">{{ g.serials.join(' / ') }}</span>
      </div>
    </div>
    <div v-else class="game-grid">
      <GameCard v-for="g in items" :key="g.slug" :slug="g.slug" />
    </div>
  </section>
</template>
