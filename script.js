function toggleMenu() {
    var menu = document.querySelector('#menu');
    menu.classList.toggle('show');
  }
  document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('#menu a');
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            toggleMenu(); 
        });
    });
});
  
