document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('[data-demo]').forEach(el=>el.addEventListener('click',e=>{
  e.preventDefault(); const msg=el.getAttribute('data-demo')||'This is a storyboard prototype action.';
  alert(msg);
 }));
 document.querySelectorAll('[data-filter]').forEach(input=>input.addEventListener('input',()=>{
  const q=input.value.toLowerCase(), target=document.querySelector(input.dataset.filter);
  if(target) target.querySelectorAll('tbody tr').forEach(row=>row.hidden=!row.innerText.toLowerCase().includes(q));
 }));
});
