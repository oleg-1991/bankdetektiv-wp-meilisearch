// Dropdown "Wissen"
(function () {
    const dropdown = document.querySelector('.nav-dropdown');
    if (!dropdown) return;
  
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu   = dropdown.querySelector('.dropdown-menu');
  
    function setOpen(state) {
      toggle.setAttribute('aria-expanded', String(state));
      dropdown.setAttribute('aria-open', String(state));
      menu.hidden = !state;
    }
  
    setOpen(false);
  
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      setOpen(!isOpen);
    });
  
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) setOpen(false);
    });
  
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });
  
    menu.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        setTimeout(() => {
          if (!dropdown.contains(document.activeElement)) setOpen(false);
        }, 0);
      }
    });
  })();
  

  // Mobile off-canvas
(function(){
  const btn = document.querySelector('.menu-btn');
  const mobile = document.getElementById('mobile-nav');
  const overlay = document.querySelector('.mobile-overlay');
  if(!btn || !mobile || !overlay) return;

  const open  = () => { document.body.classList.add('menu-open'); btn.setAttribute('aria-expanded','true'); };
  const close = () => { document.body.classList.remove('menu-open'); btn.setAttribute('aria-expanded','false'); };

  btn.addEventListener('click', () => {
    document.body.classList.contains('menu-open') ? close() : open();
  });
  overlay.addEventListener('click', close);
  mobile.addEventListener('click', e => { if (e.target.closest('a')) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();
