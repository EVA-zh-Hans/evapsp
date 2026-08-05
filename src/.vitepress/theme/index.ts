import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import CoverImage from './components/CoverImage.vue'
import StatusBadge from './components/StatusBadge.vue'
import GameCard from './components/GameCard.vue'
import GameInfo from './components/GameInfo.vue'
import GameSerials from './components/GameSerials.vue'
import GameReleases from './components/GameReleases.vue'
import GameSection from './components/GameSection.vue'
import '../../styles/custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CoverImage', CoverImage)
    app.component('StatusBadge', StatusBadge)
    app.component('GameCard', GameCard)
    app.component('GameInfo', GameInfo)
    app.component('GameSerials', GameSerials)
    app.component('GameReleases', GameReleases)
    app.component('GameSection', GameSection)
  },
} satisfies Theme
