document.addEventListener('DOMContentLoaded', function () {
  var currenturl = 0;
  for (var i = 0; i < document.links.length; i++) {
      if (document.links[i].href === document.URL) {
        currenturl = i;
      }
  }
  document.links[currenturl].classList.toggle('is-hovered');
});