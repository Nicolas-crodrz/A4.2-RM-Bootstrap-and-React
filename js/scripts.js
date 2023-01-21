// Carrusel de imagenes
$(document).ready(function(){
  $('.headerContenido').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  });
});


// Typing
new TypeIt(".typing", {
  speed: 100,
  waitUntilVisible: true,
}).go();