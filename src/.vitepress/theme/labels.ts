import { useData } from 'vitepress'

const zh: Record<string, string> = {
  'status.done': '已完成',
  'status.working': '进行中',
  'status.planned': '已规划',
  'status.not-planned': '不考虑',
  'viewDetails': '查看详情',
  'visitRepo': '前往仓库',
  'download': '下载',
  'gameSerials': '游戏编号',
  'patchDownloads': '补丁下载',
  'coverAlt': '游戏封面',
  'emptyPlanned': '暂无规划项目，敬请期待。',
  'yearUnknown': '年份未知',
  'noPatch': '暂无公开补丁。',
  'intro': '简介',
  'translationNotes': '汉化说明',
  'howToUse': '使用方法',
  'contribute': '参与贡献',
  'latestRelease': '最新版本',
}

const en: Record<string, string> = {
  'status.done': 'Completed',
  'status.working': 'In Progress',
  'status.planned': 'Planned',
  'status.not-planned': 'Not Planned',
  'viewDetails': 'View details',
  'visitRepo': 'Visit repository',
  'download': 'Download',
  'gameSerials': 'Game serial numbers',
  'patchDownloads': 'Patch downloads',
  'coverAlt': 'Game cover',
  'emptyPlanned': 'Nothing planned yet.',
  'yearUnknown': 'Year unknown',
  'noPatch': 'No public patch available.',
  'intro': 'Introduction',
  'translationNotes': 'Translation notes',
  'howToUse': 'How to use',
  'contribute': 'Contribute',
  'latestRelease': 'Latest release',
}

export function useI18n() {
  const { lang } = useData()
  const isEn = () => lang.value === 'en'
  const t = (key: string) => (isEn() ? en[key] : zh[key]) ?? key
  const pick = (zhv: string, env: string) => (isEn() ? env : zhv)
  return { lang, t, pick }
}
