import { defineConfig } from 'vitepress'

const zhSidebar = () => [
  {
    text: '已完成',
    collapsed: true,
    items: [
      { text: '钢铁的女友2nd', link: '/pages/games/gos2' },
      { text: '钢铁的女友 特别篇', link: '/pages/games/gos-tokubetsu' },
      { text: '机密档案', link: '/pages/games/secret-of-eva' },
      { text: '福音战士：序', link: '/pages/games/eva-jo' },
    ],
  },
  {
    text: '进行中',
    collapsed: false,
    items: [{ text: 'EVA2 被创造的世界', link: '/pages/games/nge2' }],
  },
]

const enSidebar = () => [
  {
    text: 'Completed',
    collapsed: true,
    items: [
      { text: 'Girlfriend of Steel 2nd', link: '/en/pages/games/gos2' },
      { text: 'Girlfriend of Steel Tokubetsu-Hen', link: '/en/pages/games/gos-tokubetsu' },
      { text: 'Secret of Evangelion', link: '/en/pages/games/secret-of-eva' },
      { text: 'Evangelion: Jo', link: '/en/pages/games/eva-jo' },
    ],
  },
  {
    text: 'In Progress',
    collapsed: false,
    items: [{ text: 'EVA2: Tsukurareshi Sekai', link: '/en/pages/games/nge2' }],
  },
]

export default defineConfig({
  base: '/evapsp/',
  lang: 'zh-CN',
  title: 'EVA PSP 汉化计划',
  description: '新世纪福音战士 PSP 游戏汉化项目主页',
  lastUpdated: true,
  cleanUrls: false,
  head: [
    ['meta', { name: 'theme-color', content: '#8c3f3f' }],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/evapsp/favicon.svg',
      },
    ],
  ],
  vite: {
    publicDir: '../assets',
  },
  themeConfig: {
    logo: '/evapsp/favicon.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/EVA-zh-Hans' },
    ],
    footer: {
      message: '新世纪福音战士 PSP 游戏汉化项目',
      copyright: '本网站与各汉化项目无任何关联的官方授权，仅供学习与研究使用',
    },
    docFooter: { prev: '上一篇', next: '下一篇' },
    outline: { label: '本页内容', level: [2, 3] },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '重置搜索',
            backButtonTitle: '返回',
            noResultsText: '没有找到相关结果',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'EVA PSP 汉化计划',
      description: '新世纪福音战士 PSP 游戏汉化项目主页',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          {
            text: '游戏',
            items: [
              { text: '已完成', items: [
                { text: '钢铁的女友2nd', link: '/pages/games/gos2' },
                { text: '钢铁的女友 特别篇', link: '/pages/games/gos-tokubetsu' },
                { text: '机密档案', link: '/pages/games/secret-of-eva' },
                { text: '福音战士：序', link: '/pages/games/eva-jo' },
              ] },
              { text: '进行中', items: [
                { text: 'EVA2 被创造的世界', link: '/pages/games/nge2' },
              ] },
            ],
          },
        ],
        sidebar: { '/pages/games/': zhSidebar() },
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      title: 'EVA PSP Translation Projects',
      description: 'Homepage for Neon Genesis Evangelion translation projects on PSP',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          {
            text: 'Games',
            items: [
              { text: 'Completed', items: [
                { text: 'Girlfriend of Steel 2nd Portable', link: '/en/pages/games/gos2' },
                { text: 'Girlfriend of Steel Tokubetsu-Hen', link: '/en/pages/games/gos-tokubetsu' },
                { text: 'Secret of Evangelion Portable', link: '/en/pages/games/secret-of-eva' },
                { text: 'Evangelion: Jo', link: '/en/pages/games/eva-jo' },
              ] },
              { text: 'In Progress', items: [
                { text: 'EVA2: Tsukurareshi Sekai', link: '/en/pages/games/nge2' },
              ] },
            ],
          },
        ],
        sidebar: { '/en/pages/games/': enSidebar() },
        docFooter: { prev: 'Previous', next: 'Next' },
        outline: { label: 'On this page', level: [2, 3] },
        search: {
          provider: 'local',
          options: {
            translations: {
              button: { buttonText: 'Search', buttonAriaLabel: 'Search' },
              modal: {
                displayDetails: 'Display detailed results',
                resetButtonTitle: 'Reset search',
                backButtonTitle: 'Back',
                noResultsText: 'No results found',
                footer: { selectText: 'Select', navigateText: 'Switch', closeText: 'Close' },
              },
            },
          },
        },
      },
    },
  },
})
