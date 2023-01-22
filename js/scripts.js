
//Plugin 1/3: Carrusel de imagenes
$(document).ready(function(){
  $('.headerContenido').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  });
});


//Plugin 2/3: Typing
new TypeIt(".typing", {
  speed: 100,
  waitUntilVisible: true,
}).go();

/*
Plugin 3/3: Flipping Gallery
Path: js\flip.js
*/
