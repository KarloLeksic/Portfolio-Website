const sidemenu = document.querySelector('#side-menu');

// Otvaranje responzivnog menija kada je na malom ekranu
document.querySelector('.bx-menu-alt-right').addEventListener('click', () => {
  sidemenu.style.right = '0';
});

// Zatvaranje responzivnog menija
document.querySelector('.bx-x').addEventListener('click', () => {
  sidemenu.style.right = '-200px';
});

// Za automatsko prebacivanje aktivnih linkova u gornjem izborniku
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header ul li a');

window.onscroll = () => {
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 500;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      document.querySelector('header ul li a[href*=' + id + ']').classList.add('active');
    }
  });
};