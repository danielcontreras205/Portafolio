// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//----------------------------- contador de pagina ----------------------------------------
if (window.localStorage) {
  // localStorage está habilitado
  console.log("localStorage está habilitado.");
  // Verificamos si ya existe un contador en el almacenamiento local
  if (localStorage.getItem("visitCount")) {
    // Si existe, incrementamos el contador
    let count = parseInt(localStorage.getItem("visitCount")) + 1;
    localStorage.setItem("visitCount", count);
    document.getElementById("count").textContent = count;
  } else {
    // Si no existe, inicializamos el contador a 1
    localStorage.setItem("visitCount", 1);
    document.getElementById("count").textContent = 1;
  }
} else {
  // localStorage no está habilitado
  console.log("localStorage no está habilitado. No podrás utilizarlo.");
}

if (navigator.cookieEnabled === false) {
  alert("Por favor, habilita las cookies en tu navegador para usar todas las funciones del sitio.");
} else {
  setCookie("miCookie", "miValor", 365); // La cookie expirará en un año
}

function setCookie(nombre, valor, expiracionDias) {
  var fechaExpiracion = new Date();
  fechaExpiracion.setDate(fechaExpiracion.getDate() + expiracionDias);
  var cookie = nombre + "=" + valor + ";expires=" + fechaExpiracion.toUTCString() + ";path=/";
  document.cookie = cookie;
  // Verificar si la cookie se ha creado
  if (cookieExiste(nombre)) {
    console.log('La cookie se creó correctamente.');
  } else {
    console.log('Hubo un problema al crear la cookie.');
  }

}
// Función para verificar si una cookie existe
function cookieExiste(nombreCookie) {
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    // Verificar si la cookie comienza con el nombre proporcionado
    if (cookie.indexOf(nombreCookie + '=') === 0) {
      return true;
    }
  }
  return false;
}


