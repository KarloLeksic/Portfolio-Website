// Animacija za prvu polovicu hero sekcije
document.querySelector('#hero-section .personal-information-container').classList.add('animate-hero');

// Animacija za pocetnu sliku
document.querySelector('#hero-section .hero-image').classList.add('animate-hero');

// Animacija na about-me sekciji tek kada se do nje dode
window.onscroll = () => {

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
};
