const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const ctx={window:{addEventListener(){}},document:{addEventListener(){}},localStorage:{getItem(){return null}},structuredClone,setTimeout,clearTimeout};vm.createContext(ctx);
for(const f of ['course.js','learning-data.js','course-en.js','account-course.js','platform.js','experience.js'])vm.runInContext(fs.readFileSync('public/'+f,'utf8'),ctx);
const x=ctx.window.CyberExperience,fr=ctx.window.COURSE_FR,en=ctx.window.COURSE_EN;
assert.equal(x.validateCatalog({fr,en,version:1}).en.length,8);
assert.throws(()=>x.validateCatalog({fr,en:en.slice(1),version:1}));
const broken=structuredClone(fr);broken[0].q[0][2]=4;assert.throws(()=>x.validateCatalog({fr:broken,en,version:1}));
const lab=structuredClone(fr);lab[0].lab[3]=[6];assert.throws(()=>x.validateCatalog({fr:lab,en,version:1}));
const empty={schema:1,events:{},assessments:{},exercises:{}};
const old={...empty,assessments:{diagnostic:{score:1,at:'2026-01-01'}},events:{a:{at:'2026-01-01'}},exercises:{0:{outcome:'act',at:'2026-01-01'}}};
const newer={...empty,assessments:{diagnostic:{score:8,at:'2026-01-02'}},events:{b:{at:'2026-01-02'}},exercises:{0:{outcome:'verified',at:'2026-01-02'}}};
for(const [a,b]of [[old,newer],[newer,old]]){const m=x.merge(a,b);assert.equal(m.assessments.diagnostic.score,8);assert.equal(m.exercises[0].outcome,'verified');assert.equal(Object.keys(m.events).length,2)}
assert.equal(JSON.stringify(x.merge(old,newer)),JSON.stringify(x.merge(x.merge(old,newer),newer)));
const many={...empty,events:Object.fromEntries(Array.from({length:240},(_,i)=>['e'+i,{at:String(i).padStart(3,'0')}]))};assert.equal(Object.keys(x.merge(many,empty).events).length,200);
fr.forEach((m,i)=>{assert.equal(m.id,en[i].id);assert.equal(m.q.length,en[i].q.length);assert.equal(m.lab[2].length,3);assert.equal(en[i].lab[2].length,3)});
console.log('Catalogue bilingue, validation des exercices, historique multidevice et conservation des résultats récents : OK.');

const p1={...empty,profile:{displayName:'First',language:'fr',theme:'light',at:'2026-01-01'}};
const p2={...empty,profile:{displayName:'Latest',language:'en',theme:'dark',at:'2026-01-02'}};
for(const [a,b]of [[p1,p2],[p2,p1]]){assert.equal(x.merge(a,b).profile.displayName,'Latest');assert.equal(x.merge(a,b).profile.language,'en')}
console.log('Préférences de profil : conservation de la version la plus récente entre appareils : OK.');

const a={...empty,courses:{'second-course':{events:{a:{at:'2026-01-01'}},assessments:{},exercises:{}}}};
const b={...empty,courses:{'third-course':{events:{b:{at:'2026-01-02'}},assessments:{},exercises:{}}}};
const courses=x.merge(a,b).courses;assert.equal(Object.keys(courses['second-course'].events).length,1);assert.equal(Object.keys(courses['third-course'].events).length,1);
console.log('Historique : conservation indépendante des activités de plusieurs formations : OK.');

const second=ctx.window.CYBER_TRAININGS[0];assert.equal(x.validateCatalog({...second,version:1}).fr.length,6);assert.equal(ctx.window.CyberPlatform.courses().length,2);console.log('Deuxième formation : six ateliers bilingues et quiz valides : OK.');
