/** @typedef {{id:string,name:string,age:number,gender:string,fontSize:'small'|'medium'|'large'}} User */
/** @typedef {{id:string,name:string,spec:string,dosageForm:string,manufacturer:string,approvalNo:string,expiryDate:string}} Medication */
/** @typedef {{id:string,medicationId:string,time:string,status:'pending'|'confirmed'|'snoozed'|'missed',snoozedUntil?:string,needFamilyNotify:boolean}} Reminder */
/** @typedef {{id:string,level:'green'|'yellow'|'red',type:string,message:string,createdAt:string}} RiskAlert */
/** @typedef {{id:string,takeTime:string,medication:string,feeling:string,missed:boolean,toCheck:string,summary:string}} VoiceLog */
/** @typedef {{id:string,name:string,relation:string,phone:string}} FamilyMember */

module.exports = {}
