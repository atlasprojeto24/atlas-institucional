
(function(){
 const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav');
 if(toggle&&nav) toggle.addEventListener('click',()=>nav.classList.toggle('open'));
 const intro=document.querySelector('.intro');
 if(intro){
   const seen=sessionStorage.getItem('atlasIntroSeen');
   if(seen){intro.classList.add('hidden');}
   else{
     setTimeout(()=>{intro.classList.add('hidden');sessionStorage.setItem('atlasIntroSeen','1');},2400);
     intro.addEventListener('click',()=>{intro.classList.add('hidden');sessionStorage.setItem('atlasIntroSeen','1');});
   }
 }
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
 const form=document.querySelector('[data-contact-form]');
 if(form) form.addEventListener('submit',e=>{
   e.preventDefault();
   const d=new FormData(form);
   const subject=encodeURIComponent('Contato pelo site Atlas — '+(d.get('area')||'Geral'));
   const body=encodeURIComponent('Nome: '+d.get('name')+'\nE-mail: '+d.get('email')+'\nÁrea: '+d.get('area')+'\nMensagem: '+d.get('message'));
   window.location.href='mailto:atlas.projeto24@gmail.com?subject='+subject+'&body='+body;
 });
})();
