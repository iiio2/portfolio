const navBtn = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');
// add event listener
navBtn.addEventListener('click', () => {
  links.classList.toggle('show-links');
});
const date = document.querySelector('#date');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add('navbar-fixed');
  } else {
    navbar.classList.remove('navbar-fixed');
  }
});
// show sidebar
navBtn.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar');
});
closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
});

const today = new Date();
date.innerHTML = today.getFullYear();
