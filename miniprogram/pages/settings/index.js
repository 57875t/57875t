const { user } = require('../../mock/data')
Page({
  data:{ user, fontSizes:['large','medium','small'], reminderTimes:['08:00','12:00','20:00'] },
  setFontSize(e){ this.setData({ 'user.fontSize': e.currentTarget.dataset.size }) },
  goDisclaimer(){ wx.navigateTo({ url:'/pages/disclaimer/index' }) }
})
