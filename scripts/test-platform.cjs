const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const memory=new Map(),ctx={window:{COURSE_FR:[{time:1}],COURSE_EN:[{time:1}]},localStorage:{getItem:k=>memory.get(k)||null,setItem:(k,v)=>memory.set(k,v)}};vm.createContext(ctx);vm.runInContext(fs.readFileSync('public/platform.js','utf8'),ctx);const p=ctx.window.CyberPlatform;
for(const path of ['/espace','/formations','/formation/securite-numerique','/module/0','/bilan','/avis','/profil','/documents','/admin/avis']){
 assert.equal(p.access(path,{ready:false,signedIn:false}),'pending');
 assert.equal(p.access(path,{ready:true,signedIn:false}),'login');
}
for(const path of ['/','/catalogue','/aide','/contact','/reussite?nom=Test'])assert.equal(p.access(path,{ready:false,signedIn:false}),'public');
assert.equal(p.access('/admin',{ready:true,signedIn:true,roleReady:false}),'pending');assert.equal(p.access('/admin',{ready:true,signedIn:true,roleReady:true,isAdmin:false}),'forbidden');assert.equal(p.access('/admin',{ready:true,signedIn:true,roleReady:true,isAdmin:true}),'allow');
assert.equal(p.progressKey('alice',p.primary),'cyber-reflexes-v2:alice');
assert.notEqual(p.progressKey('alice','autre-cours'),p.progressKey('alice',p.primary));assert.notEqual(p.progressKey('alice'),p.progressKey('bob'));
assert.equal(p.paths('alice').progress.join('/'),'progress/alice');assert.equal(p.paths('alice','autre-cours').progress.join('/'),'progress/alice/courses/autre-cours');assert.equal(p.paths('alice','autre-cours').feedback.join('/'),'courseFeedback/autre-cours/responses/alice');
assert.throws(()=>p.paths('alice','../private'));
assert.equal(p.validFeedback({rating:5,prepared:'oui',comment:'Useful'}),true);assert.equal(p.validFeedback({rating:0,prepared:'oui',comment:''}),false);assert.equal(p.validFeedback({rating:5,prepared:'oui',comment:'x'.repeat(1501)}),false);
ctx.window.CYBER_TRAININGS=[{id:'autre-cours',status:'published',fr:[{}],en:[{}]},{id:'brouillon',status:'draft',fr:[{}],en:[{}]}];assert.equal(p.courses().length,2);assert.throws(()=>p.select('brouillon','alice'));p.select('autre-cours','alice');p.forUser('bob');assert.equal(p.current(),p.primary);p.forUser('alice');assert.equal(p.current(),'autre-cours');
// Exercise the actual auth state handler with separate per-account storage and delayed callbacks.
const app=fs.readFileSync('public/app.js','utf8'),auth=app.slice(app.indexOf('function startProgress()'),app.indexOf('async function initAuth()'));
Object.assign(ctx,{document:{activeElement:null,querySelectorAll:()=>[],querySelector:()=>null},location:{hash:'#/espace',replace:v=>{ctx.redirect=v}},COURSE:[{}],JSON});ctx.window.ProgressSync={stop(){},start(o){ctx.lastSync=o}};ctx.window.CyberExperience={activateForUser:uid=>uid?p.forUser(uid):p.select(p.primary),connect(){}};
vm.runInContext("let user=null,authReady=false,authAPI={auth:{app:{}}},activeKey='',state={};function load(){return JSON.parse(localStorage.getItem(activeKey)||'{\"completed\":[]}')}function normalize(v){return v}function render(){}",ctx);
vm.runInContext(auth,ctx);memory.set(p.progressKey('alice'),JSON.stringify({completed:[0]}));ctx.authUserChanged({uid:'alice'});const aliceSync=ctx.lastSync;assert.deepEqual(JSON.parse(vm.runInContext('JSON.stringify(state.completed)',ctx)),[0]);ctx.authUserChanged({uid:'bob'});assert.deepEqual(JSON.parse(vm.runInContext('JSON.stringify(state.completed)',ctx)),[]);aliceSync.apply({completed:[0,1,2]});assert.deepEqual(JSON.parse(vm.runInContext('JSON.stringify(state.completed)',ctx)),[]);ctx.authUserChanged(null);assert.equal(ctx.redirect,'#/compte');assert.equal(vm.runInContext('user',ctx),null);
console.log('Accès public/privé/admin, séparation des comptes et formations, feedback et redirection après déconnexion : OK.');
