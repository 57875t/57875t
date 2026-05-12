const { reminders, riskAlerts, voiceLogs, familyMembers } = require('../../mock/data')
const { complianceText } = require('../../utils/common')
Page({
  data:{ reminders, riskAlerts, voiceLogs, family:familyMembers[0], complianceText },
  contact(){ wx.showToast({ title:'已模拟联系家属', icon:'none' }) }
})
