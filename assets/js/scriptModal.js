var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 500,
      modifier: 2,
      slideShadows: true
    },
    keyboard: {
      enabled: true
    },
    mousewheel: {
      thresholdDelta: 70
    },
    spaceBetween: 60, 
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  //---------------------------------- Definir la consulta de medios -----------------------------------------
var mediaQuery = window.matchMedia("(max-width: 720px)");

// Función que se ejecutará cuando cambie el estado de la consulta de medios
function handleMediaQueryChange(mediaQuery) {
  var pageWidth = window.innerWidth;
  var pageHeight = window.innerHeight;
  if (mediaQuery.matches) {
    // El ancho de la pantalla es máximo 720px
    console.log("La pantalla tiene un ancho máximo de 720px o menos.");
    console.log("Ancho de la página:", pageWidth, "Alto de la página:", pageHeight);
  } else {
    // El ancho de la pantalla es mayor a 720px
    console.log("La pantalla tiene un ancho mayor a 720px.");
    console.log("Ancho de la página:", pageWidth, "Alto de la página:", pageHeight);
  }
}

// Ejecutar la función al cargar la página
handleMediaQueryChange(mediaQuery);

// Añadir un "escucha" para cambios en la consulta de medios
mediaQuery.addEventListener('change',handleMediaQueryChange);
