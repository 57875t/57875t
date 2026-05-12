const { reminders, riskAlerts } = require('../../mock/data')
const { complianceText } = require('../../utils/common')

Page({
  data: {
    todoCount: reminders.filter(r => r.status === 'pending').length,
    latestStatus: reminders[0]?.status || 'pending',
    complianceText,
    entries: [
      { text: '拍照识药', path: '/pages/scan/index' },
      { text: '语音说身体情况', path: '/pages/voice/index' },
      { text: '今日用药提醒', path: '/pages/reminder/index' },
      { text: '风险提示记录', path: '/pages/risk/index' },
      { text: '联系家属/药师', path: '/pages/family/index' }
    ],
    latestRisk: riskAlerts[0]
  },
  go(e) { wx.navigateTo({ url: e.currentTarget.dataset.path }) }
})
