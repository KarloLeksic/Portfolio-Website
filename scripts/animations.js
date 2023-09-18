// Animacija za prvu polovicu hero sekcije
document.querySelector('#hero-section .personal-information-container').classList.add('animate-hero');

// Animacija za pocetnu sliku
document.querySelector('#hero-section .hero-image').classList.add('animate-hero');

// Animacija na about-me sekciji tek kada se do nje dode
function animateAboutSection(screenPosition) {
  const aboutMeSection = document.querySelector('#about-section');

  // Dohvacanje pozicije od vrha ekrana
  const aboutMePosition = aboutMeSection.getBoundingClientRect().top;

  // Dohvacanje lijevog i desnog elementa za tu animaciju
  const aboutMeRight = document.querySelector('#about-section .image-container');

  const aboutMeLeft = document.querySelector('#about-section .about-me-container');

  if (aboutMePosition < screenPosition / 1.5) {
    aboutMeRight.classList.add('animate-about-me');
    aboutMeLeft.classList.add('animate-about-me');
  }
}

function animateSkillsSection(screenPosition) {
  const skillsSection = document.querySelector('#skills-section');
  const skillsSectionPosition = skillsSection.getBoundingClientRect().top;
  const skliisRight = document.querySelector('.skliis-info-container .skills-info');
  const skliisLeft = document.querySelector('.skills-container .skills');

  if (skillsSectionPosition < screenPosition / 1.5) {
    skliisRight.classList.add('animate-skills');
    skliisLeft.classList.add('animate-skills');
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


window.onscroll = () => {
  // Pozicija trenutna screena za trigeranje animacija
  const screenPosition = window.innerHeight;

  animateAboutSection(screenPosition);
  animateSkillsSection(screenPosition);
};
