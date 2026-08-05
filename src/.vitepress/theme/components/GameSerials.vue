<script setup lang="ts">
import { useI18n } from '../labels'
import { useGames } from '../useGames'

const props = defineProps<{ slug: string }>()
const { t } = useI18n()
const { bySlug } = useGames()
const game = bySlug(props.slug)!
</script>

<template>
  <section class="game-block">
    <h2>{{ t('gameSerials') }}</h2>
    <ul class="serial-list">
      <li v-for="s in game.serials" :key="s">
        <code>{{ s }}</code>
      </li>
    </ul>
  </section>
</template>
