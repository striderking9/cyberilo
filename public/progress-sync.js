/* Synchronisation privée de la progression avec récupération des acquis locaux. */
'use strict';
function mergeProgress(remote,local,normalize){
 const a=normalize(remote),b=normalize(local),out={...a,...b};
 out.completed=[...new Set([...a.completed,...b.completed])].sort((x,y)=>x-y);
 for(const field of ['read','revealed'])out[field]=[...new Set([...a[field],...b[field]])];
 out.lessonSteps={...a.lessonSteps};for(const [key,value]of Object.entries(b.lessonSteps))out.lessonSteps[key]=Math.max(out.lessonSteps[key]||0,value);
 out.answers={...a.answers,...b.answers};out.practiceAnswers={...a.practiceAnswers,...b.practiceAnswers};out.current=Math.max(a.current,b.current);
 out.completedAt=[a.completedAt,b.completedAt].filter(Boolean).sort()[0]||'';out.participantName=b.participantName||a.participantName;
 return normalize(out);
}
window.ProgressSync=(()=>{
 let session=null,timer=null,serial=0,status='Connexion requise pour synchroniser';
 const show=message=>{status=message;document.querySelectorAll('[data-sync-status]').forEach(el=>el.textContent=status)};
 function stop(){serial++;clearTimeout(timer);session?.unsubscribe?.();session=null;show('Progression locale · connexion requise')}
 async function start(options){
 stop();const ticket=serial;show('Chargement de votre progression…');
 try{const f=await import('https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js');if(ticket!==serial)return;
 const ref=f.doc(f.getFirestore(options.app),'progress',options.uid),epochKey='cyber-progress-epoch:'+options.uid;
 let epoch=0;try{epoch=Number(localStorage.getItem(epochKey))||0}catch(e){}
 const s=session={...options,f,ref,epochKey,epoch,ready:false,dirty:0,busy:false,resetting:false,ticket};
 const keepEpoch=n=>{s.epoch=n;try{localStorage.setItem(epochKey,String(n))}catch(e){}};
 s.keepEpoch=keepEpoch;
 s.unsubscribe=f.onSnapshot(ref,{includeMetadataChanges:true},snap=>{
 if(session!==s||s.resetting||snap.metadata.hasPendingWrites)return;
 const data=snap.exists()?snap.data():null;
 try{
 if(data){const epoch=Number(data.epoch)||0;if(epoch<s.epoch)return;if(epoch!==s.epoch){keepEpoch(epoch);options.apply(options.normalize(data.progress))}else options.apply(mergeProgress(data.progress,options.read(),options.normalize))}
 if(!snap.metadata.fromCache){s.ready=true;show(s.dirty?'Sauvegarde en cours…':'Progression synchronisée');schedule()}
 else show('Copie locale · connexion au serveur en cours…');
 }catch(e){show('Progression distante illisible · copie locale conservée')}
 },error=>{s.ready=false;show(error.code==='permission-denied'?'Synchronisation bloquée · règles Firestore à mettre à jour':'Synchronisation indisponible · copie locale conservée')});
 // Une première transaction importe également les validations faites avant la connexion.
 s.dirty++;
 }catch(e){if(ticket===serial)show('Synchronisation indisponible · copie locale conservée')}
 }
 function schedule(){const s=session;if(!s)return;clearTimeout(timer);if(!s.ready||s.busy||s.resetting||!s.dirty)return;show('Sauvegarde en cours…');timer=setTimeout(()=>flush(s),400)}
 async function flush(s){if(session!==s||s.busy||s.resetting||!s.ready)return;s.busy=true;const revision=s.dirty;
 try{const merged=await s.f.runTransaction(s.f.getFirestore(s.app),async transaction=>{const snap=await transaction.get(s.ref),data=snap.exists()?snap.data():null;const epoch=Number(data?.epoch)||0;
 if(session!==s)throw Error("session-changed");const local=s.read();const progress=data&&epoch!==s.epoch?s.normalize(data.progress):data?mergeProgress(data.progress,local,s.normalize):s.normalize(local);
 transaction.set(s.ref,{uid:s.uid,epoch,progress,updatedAt:s.f.serverTimestamp()});return{progress,epoch};});
 if(session!==s)return;s.keepEpoch(merged.epoch);if(s.dirty===revision){s.dirty=0;s.apply(merged.progress)}show(s.dirty?'Sauvegarde en cours…':'Progression synchronisée');
 }catch(e){if(session===s)show(e.code==='permission-denied'?'Synchronisation bloquée · règles Firestore à mettre à jour':'Sauvegarde distante impossible · copie locale conservée')}
 finally{if(session===s){s.busy=false;if(s.dirty&&s.dirty!==revision)schedule()}}
 }
 function changed(){if(session){session.dirty++;schedule()}}
 async function reset(progress){const s=session;if(!s||!s.ready||s.busy)throw Error('sync-not-ready');s.resetting=true;clearTimeout(timer);show('Réinitialisation du compte…');try{const epoch=await s.f.runTransaction(s.f.getFirestore(s.app),async tx=>{const snap=await tx.get(s.ref);const epoch=(Number(snap.data()?.epoch)||0)+1;tx.set(s.ref,{uid:s.uid,epoch,progress:s.normalize(progress),updatedAt:s.f.serverTimestamp()});return epoch});if(session!==s)return;s.keepEpoch(epoch);s.dirty=0;s.apply(s.normalize(progress));show('Progression synchronisée')}catch(error){show('Réinitialisation impossible · copie locale conservée');throw error}finally{s.resetting=false}}
 window.addEventListener('online',()=>{if(session){session.dirty++;schedule()}});
 return{start,stop,changed,reset,refresh:()=>show(status)};
})();
