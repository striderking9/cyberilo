/* Contrats de navigation, de session et de stockage par formation. */
'use strict';
window.CyberPlatform=(()=>{
 const primary='securite-numerique';
 const validId=id=>typeof id==='string'&&id.length<=60&&/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id);
 const definitions=()=>[{id:primary,title:{fr:'Les bases de la sécurité numérique',en:'Digital security: the essentials'},description:{fr:'Reconnaître les pièges, protéger ses comptes et réagir avec les bons réflexes.',en:'Recognise scams, protect accounts and respond with useful habits.'},category:{fr:'Sécurité numérique',en:'Digital security'},level:{fr:'Débutant',en:'Beginner'},access:'free',status:'published',fr:window.COURSE_FR,en:window.COURSE_EN},...(window.CYBER_TRAININGS||[])].filter((c,i,all)=>validId(c.id)&&all.findIndex(x=>x.id===c.id)===i);
 let selected=primary;
 function get(id){return definitions().find(c=>c.id===id)||null}
 function courses(){return definitions().filter(c=>c.status==='published'&&Array.isArray(c.fr)&&Array.isArray(c.en)&&c.fr.length&&c.fr.length===c.en.length)}
 function select(id,uid){if(!courses().some(c=>c.id===id))throw Error('Unknown course');selected=id;try{if(uid)localStorage.setItem('cyberilo-active-course:'+uid,id)}catch{}return get(id)}
 function forUser(uid){let id=primary;try{id=localStorage.getItem('cyberilo-active-course:'+uid)||primary}catch{}return select(courses().some(c=>c.id===id)?id:primary,uid)}
 const progressKey=(uid,id=selected)=>'cyber-reflexes-v2:'+(uid||'guest')+(id===primary?'':':course:'+id);
 function paths(uid,id=selected){if(!uid||!validId(id))throw Error('Invalid storage scope');return{progress:id===primary?['progress',uid]:['progress',uid,'courses',id],feedback:id===primary?['feedback',uid]:['courseFeedback',id,'responses',uid],feedbackCollection:id===primary?['feedback']:['courseFeedback',id,'responses'],content:['content',id===primary?'catalog':id],draft:['contentDrafts',id===primary?'catalog':id],versions:id===primary?['contentVersions']:['contentHistory',id,'versions']}}
 const protectedRoute=path=>/^\/(espace|profil|formations|formation|resultats|historique|documents|diagnostic|revision|module|exercice|bilan|avis|admin)(\/|$)/.test(path);
 function access(path,{ready,signedIn,isAdmin,roleReady}){if(!protectedRoute(path))return'public';if(!ready)return'pending';if(!signedIn)return'login';if(path.startsWith('/admin'))return!roleReady?'pending':isAdmin?'allow':'forbidden';return'allow'}
 function validFeedback(v){return Number.isInteger(v.rating)&&v.rating>=1&&v.rating<=5&&['oui','partiellement','non'].includes(v.prepared)&&typeof v.comment==='string'&&v.comment.length<=1500}
 return{primary,get,courses,select,forUser,progressKey,paths,access,protectedRoute,validFeedback,validId,current:()=>selected};
})();
