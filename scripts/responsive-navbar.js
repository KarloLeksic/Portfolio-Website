const sidemenu = document.querySelector('#side-menu');

// Otvaranje responzivnog menija kada je na malom ekranu
document.querySelector('.bx-menu-alt-right').addEventListener('click', () => {
  sidemenu.style.right = '0';
});

// Zatvaranje responzivnog menija
document.querySelector('.bx-x').addEventListener('click', () => {
  sidemenu.style.right = '-200px';
});
