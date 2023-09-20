const buttons = document.querySelectorAll('#my-work button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => {
      b.classList.remove('active');
    });

    btn.classList.add('active');

    // Generiranje sadržaja ovisno o pritisnutim butonima
  });
});

