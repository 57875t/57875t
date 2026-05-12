const { voiceLogs } = require('../../mock/data')
const { complianceText } = require('../../utils/common')
Page({
  data:{
    inputText:'今早8点吃了阿司匹林，胃有点不舒服。',
    log: voiceLogs[0],
    complianceText
  },
  mockVoiceInput(){ wx.showToast({ title:'已模拟语音转文字', icon:'none' }) }
})
