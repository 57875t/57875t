const { medications } = require('../../mock/data')
const { complianceText } = require('../../utils/common')
Page({
  data:{ fileName:'', result:null, complianceText },
  chooseImage(){
    this.setData({ fileName:'mock-drug-box.jpg', result: medications[0] })
  },
  confirmManual(){ wx.showToast({ title:'已标记人工确认', icon:'none' }) }
})
