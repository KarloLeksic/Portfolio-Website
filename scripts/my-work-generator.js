const buttons = document.querySelectorAll('#my-work button');

// Listener na svaki gumb kad se klikne da se generiraju projekti samo za tu kategoriju
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Micanje active klase sa svih
    buttons.forEach(b => {
      b.classList.remove('active');
    });

    // Dodavanje active kolase samo gumbu koji je kliknut
    btn.classList.add('active');

    // Generiranje sadržaja ovisno o pritisnutom gumbu
    const selectedCategory = btn.getAttribute('id');
    generateProjects(selectedCategory);
  });
});

// Po defaultu generiraj sve
generateProjects('all');

// Generiranje projekata na stranici u ovisnosti o kategorija
function generateProjects(selectedCategory) {
  // Dohvati element u koji se ubacuju projekti
  const projectContainerElement = document.querySelector('.work-list');

  // Brisanje onih koji su tamo
  projectContainerElement.innerHTML = '';

  // Idemo kroz sve projecte
  projects.forEach(project => {
    // Ako je odabrano na sve onda ih prikazujemo sve
    let html = '';
    if (selectedCategory === 'all') {
      html = generateProjectHtml(project.imagePath, project.name, project.description, project.link, project.category);
    } else {
      // Ako je to ta kategorija koju zelimo, generiraj html i popunjavaj redom grid
      if (project.category.includes(selectedCategory)) {
        html = generateProjectHtml(project.imagePath, project.name, project.description, project.link, project.category);
      }
    }

    projectContainerElement.innerHTML += html;
  });
}

// Funkcija koja generira html za jedan projekt
function generateProjectHtml(imagePath, name, description, link, category) {
  return `
    <div class="card" data-category="${category}">
    <img src="${imagePath}">

      <div class="layer">
        <h3>${name}</h3>
        <p>${description}</p>
        <a href="${link}" target="_blank">
        <i class='bx bx-link-external'></i></a>
      </div>
    </div>
  `;
}