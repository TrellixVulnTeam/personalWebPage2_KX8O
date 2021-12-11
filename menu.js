document.addEventListener('DOMContentLoaded', function () {

  var navbarburger =  document.querySelector('.navbar-burger');
  var navbarmenu = document.querySelector('.navbar-menu');

  navbarburger.addEventListener('click', function () {
    navbarburger.classList.toggle('is-active');
    navbarmenu.classList.toggle('is-active');
  });
  
});