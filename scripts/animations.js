// Animacija za prvu polovicu hero sekcije
document.querySelector('#hero-section .personal-information-container').classList.add('animate-hero');

// Animacija za pocetnu sliku
document.querySelector('#hero-section .hero-image').classList.add('animate-hero');

// Animacija na about-me sekciji tek kada se do nje dode
function animateAboutSection() {
  const aboutMeSection = document.querySelector('#about-section');

  // Dohvacanje pozicije od vrha ekrana
  const aboutMePosition = aboutMeSection.getBoundingClientRect().top;

  // Moramo znati koliko je velik ekran kojeg trenutno gledamo
  const screenPosition = window.innerHeight;

  // Dohvacanje lijevog i desnog elementa za tu animaciju
  const aboutMeRight = document.querySelector('#about-section .image-container');

  const aboutMeLeft = document.querySelector('#about-section .about-me-container');

  if (aboutMePosition < screenPosition / 2) {
    aboutMeRight.classList.add('animate-about-me');
    aboutMeLeft.classList.add('animate-about-me');
  }
}

// Za animiranje navbara kak se skrola
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

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      document.querySelector('header ul li a[href*=' + id + ']').classList.add('active');
    }
  });

  animateAboutSection();
};
