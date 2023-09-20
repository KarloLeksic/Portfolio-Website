// Animacija za pocetnu sekciju mora se izvrsiti tek kada se stranica ucita
window.addEventListener('load', function () {
  animateHeroSection();
});

// Animacija za prvu polovicu hero sekcije
function animateHeroSection() {
  document.querySelector('#hero-section .personal-information-container').classList.add('animate-hero');

  // Animacija za pocetnu sliku
  document.querySelector('#hero-section .hero-image').classList.add('animate-hero');
}

// Animacija na about-me sekciji tek kada se do nje dode
function animateAboutSection(screenPosition) {
  const aboutMeSection = document.querySelector('#about-section');

  if (aboutMeSection.getBoundingClientRect().top < screenPosition / 1.5) {
    document.querySelector('#about-section .image-container').classList.add('animate-about-me');
    document.querySelector('#about-section .about-me-container').classList.add('animate-about-me');
  }
}

function animateSkillsSection(screenPosition) {
  const skillsSection = document.querySelector('#skills-section');

  if (skillsSection.getBoundingClientRect().top < screenPosition / 1.5) {
    document.querySelector('.skliis-info-container .skills-info').classList.add('animate-skills');
    document.querySelector('.skills-container .skills').classList.add('animate-skills');
  }
}

function animateEducationSection(screenPosition) {
  const educationSection = document.querySelector('#education-section');

  if (educationSection.getBoundingClientRect().top < screenPosition / 1.5) {
    document.querySelector('.education').classList.add('animate-education');
    document.querySelector('.experience').classList.add('animate-education');
  }
}

// Flag za ucitavanje projektne sekcije
let projectGenerated = 0;

function animateProjectsSection(screenPosition) {
  const projectsSection = document.querySelector('#my-work');

  if (projectsSection.getBoundingClientRect().top < screenPosition / 1.3) {
    document.querySelector('.title-btns-container').classList.add('animate-work-title');

    // Po defaultu generiraj sve
    if(!projectGenerated) {
      generateProjects('all');
      projectGenerated = 1;
    }
  }
}

// Responsive menu
const sidemenu = document.querySelector('#side-menu');

// Otvaranje responzivnog menija kada je na malom ekranu
document.querySelector('.bx-menu-alt-right').addEventListener('click', () => {
  sidemenu.style.right = '0';
});

// Zatvaranje responzivnog menija
document.querySelector('.bx-x').addEventListener('click', () => {
  sidemenu.style.right = '-12.5rem';
});

// Glavni listener za animacije na skrol
window.onscroll = () => {
  // Pozicija trenutna screena za trigeranje animacija
  const screenPosition = window.innerHeight;

  animateAboutSection(screenPosition);
  animateSkillsSection(screenPosition);
  animateEducationSection(screenPosition);
  animateProjectsSection(screenPosition);
};
