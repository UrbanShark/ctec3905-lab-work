menuToggler.addEventListener('click' ev =>) {
  menuToggler.classlist.toggle('open');
});

for (const element of doucment.querySelectorAll('nav a')) {
  element.addEventListener('clicl', ev => {
    menuToggler.classList.remove('open');
  })
}
