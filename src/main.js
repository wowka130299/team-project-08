document
  .getElementById('header-btn-menu')
  .addEventListener('click', function () {
    var backdrop = document.querySelector('.backdrop');
    backdrop.classList.add('is-open');
    var headerMenu = document.querySelector('.header-menu');
    headerMenu.classList.add('is-open');
  });

document
  .getElementById('menu-btn-close')
  .addEventListener('click', function () {
    var backdrop = document.querySelector('.backdrop');
    backdrop.classList.remove('is-open');
    var headerMenu = document.querySelector('.header-menu');
    headerMenu.classList.remove('is-open');
  });
