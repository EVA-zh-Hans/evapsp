<script setup lang="ts">
import { useI18n } from '../labels'
import { useGames } from '../useGames'

const props = defineProps<{ slug: string }>()
const { t, lang } = useI18n()
const { bySlug } = useGames()
const game = bySlug(props.slug)!
</script>

<template>
  <section class="game-block">
    <h2>{{ t('patchDownloads') }}</h2>
    <div v-if="game.releases && game.releases.length" class="release-list">
      <div v-for="(r, i) in game.releases" :key="i" class="release-item">
        <div class="release-head">
          <span class="release-version">{{ r.version }}</span>
          <a class="game-btn game-btn-primary release-download" :href="r.url" target="_blank" rel="noopener">
            ⬇ {{ t('download') }}
          </a>
        </div>
        <p class="release-file"><code>{{ r.file }}</code></p>
        <p v-if="r.note" class="release-note">{{ r.note[lang === 'en' ? 'en' : 'zh'] }}</p>
      </div>
    </div>
    <p v-else>{{ t('noPatch') }}</p>
  </section>
</template>
