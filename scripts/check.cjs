const fs=require('node:fs');
const vm=require('node:vm');
const cp=require('node:child_process');
for(const f of ['public/app.js','public/course.js','public/config.js','public/progress-sync.js','public/platform.js','public/experience.js','public/learning-data.js','public/course-en.js'])cp.execFileSync(process.execPath,['--check',f]);
const ctx={window:{}};vm.createContext(ctx);vm.runInContext(fs.readFileSync('public/course.js','utf8'),ctx);
const course=ctx.window.COURSE;
if(course.length!==8)throw new Error('Le parcours doit contenir huit modules.');
course.forEach((m,i)=>{
  if(m.id!==i||m.q.length!==3||m.steps.length!==3)throw new Error(`Structure invalide : module ${i+1}`);
  if(m.keyMessages.length!==3||m.keyMessages.some(k=>k.length!==2||!k[0]||!k[1])||m.practice.options.length!==2||![0,1].includes(m.practice.correct))throw new Error(`Messages ou situation invalides : module ${i+1}`);
  m.q.forEach(q=>{if(q[1].length!==2||!Number.isInteger(q[2])||q[2]<0||q[2]>=q[1].length||!q[3])throw new Error(`Quiz invalide : module ${i+1}`)});
});
const html=fs.readFileSync('public/index.html','utf8');
for(const [,f] of html.matchAll(/(?:src|href)="\.\/([^"#]+)"/g))if(!fs.existsSync('public/'+f))throw new Error('Ressource manquante : '+f);
console.log('JavaScript, huit modules, vingt-quatre questions et ressources locales : OK.');
