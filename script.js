// site2_thematic/script.js
document.addEventListener('DOMContentLoaded', ()=>{
  const p = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a=>{
    if(a.getAttribute('href') === p) a.classList.add('active');
  });

  // миниатюра -> открытие большого изображения в новой вкладке
  document.querySelectorAll('[data-large]').forEach(el=>{
    el.addEventListener('click', (e)=>{
      e.preventDefault();
      location.href = el.dataset.large;
    });
  });
});

 window.open(el.getAttribute('data-large'),'_blank','noopener');
