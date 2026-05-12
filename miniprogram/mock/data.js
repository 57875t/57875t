const user = { id:'u1', name:'李阿姨', age:72, gender:'女', fontSize:'large' }
const medications = [
  { id:'m1', name:'阿司匹林肠溶片', spec:'100mg*30片', dosageForm:'片剂', manufacturer:'某某制药', approvalNo:'国药准字H20260001', expiryDate:'2027-12-31' },
  { id:'m2', name:'二甲双胍片', spec:'0.5g*60片', dosageForm:'片剂', manufacturer:'健康药业', approvalNo:'国药准字H20260088', expiryDate:'2026-11-01' }
]
const reminders = [
  { id:'r1', medicationId:'m1', time:'08:00', status:'pending', needFamilyNotify:false },
  { id:'r2', medicationId:'m2', time:'20:00', status:'confirmed', needFamilyNotify:false }
]
const riskAlerts = [
  { id:'ra1', level:'yellow', type:'漏服', message:'昨晚提醒未确认，请核对是否服药。', createdAt:'2026-05-12 08:30' },
  { id:'ra2', level:'red', type:'疑似相互作用', message:'两种药物可能存在相互作用风险，请核对说明书。', createdAt:'2026-05-11 19:10' }
]
const voiceLogs = [
  { id:'v1', takeTime:'2026-05-12 08:05', medication:'阿司匹林肠溶片', feeling:'胃有点不舒服', missed:false, toCheck:'是否需要餐后服药', summary:'今早已服药，反馈胃部不适待核对' }
]
const familyMembers = [{ id:'f1', name:'王先生', relation:'儿子', phone:'13800001111' }]

module.exports = { user, medications, reminders, riskAlerts, voiceLogs, familyMembers }
