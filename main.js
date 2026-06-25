const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
if(menuBtn){menuBtn.addEventListener('click',()=>nav.classList.toggle('open'))}

document.querySelectorAll('.faq-q').forEach(q=>q.addEventListener('click',()=>q.parentElement.classList.toggle('open')));

document.querySelectorAll('[data-counter]').forEach(el=>{
 const target=parseInt(el.dataset.counter,10); let n=0; const step=Math.max(1,Math.ceil(target/80));
 const run=()=>{n+=step;if(n>=target){el.textContent=target+'+';return} el.textContent=n+'+';requestAnimationFrame(run)}; run();
});

const form=document.querySelector('#quoteForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault(); const data=new FormData(form); const msg=`Hello Kodnix, I need a website.%0AName: ${data.get('name')}%0APhone: ${data.get('phone')}%0AService: ${data.get('service')}%0ABudget: ${data.get('budget')}%0AMessage: ${data.get('message')}`; window.open(`https://wa.me/917352329117?text=${msg}`,'_blank');})}
