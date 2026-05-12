const { reminders } = require('../../mock/data')
const { complianceText } = require('../../utils/common')
Page({
  data:{ reminders: JSON.parse(JSON.stringify(reminders)), complianceText },
  updateStatus(e){
    const { id, status } = e.currentTarget.dataset
    const list = this.data.reminders.map(r => r.id===id ? { ...r, status, needFamilyNotify: status==='pending' } : r)
    this.setData({ reminders:list })
  },
  checkFamilyNotify(){
    const list = this.data.reminders.map(r => r.status==='pending' ? { ...r, needFamilyNotify:true } : r)
    this.setData({ reminders:list })
  }
})
