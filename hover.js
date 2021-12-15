document.addEventListener('DOMContentLoaded', function () {
  var currenturl = 0;
  for (var i = 0; i < document.links.length; i++) {
      if (document.links[i].href === document.URL) {
        currenturl = i;
      }
  }
  //Se añade la clase is-hovered al navbar item en el que se encuentre el usuario
  document.links[currenturl].classList.toggle('is-hovered');
});