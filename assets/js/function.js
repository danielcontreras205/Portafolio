//abrir modal
function modal(x) {
  const modal = document.getElementById("modal1");
  modal.classList.replace("modalOculto", "modalPublico");
  var phat = "assets/modales/Error.html";
  if (x == 1) {
    phat = "assets/modales/modal1.html";
  } else if (x == 2) {
    phat = "assets/modales/modal2.html";
  } else if (x == 3) {
    phat = "assets/modales/modal3.html";
  }
  document.getElementById("iframer").src = phat;

  // Agregar un listener para el evento de tecla "Esc"
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      cerrarModal(modal);
    }
  });
}
//cerrar modal
const botonmodal = document.getElementById("cerrarModal");

botonmodal.addEventListener("click", function () {
  const modal = document.getElementById("modal1");
  modal.classList.replace("modalPublico", "modalOculto");
  // redirecionar el modal al de rror para cortar video de la modal 2
  var phat = "assets/modales/Error.html";
  document.getElementById("iframer").src = phat;
});

function cerrarModal(modal) {
  modal.classList.replace("modalPublico", "modalOculto");
  // redirecionar el modal al de rror para cortar video de la modal 2
  var phat = "assets/modales/Error.html";
  document.getElementById("iframer").src = phat;
  // Remover el listener cuando se cierra la modal
  window.removeEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      cerrarModal();
    }
  });
}
//----------------------------------- datos Documento txt -----------------------------------
function LecturaDeVisitas() {
  //const githubTokenCode = "iIhlVzbM3LCVheUCMZX8N3CoDFsTaH1r6N7I";
  const githubTokenCode = "";
  var token = "ghp_" + atob(githubTokenCode);
  const githubToken = token;
  const repoOwner = "danielcontreras205";
  const repoName = "danielcontreras205.github.io";
  const filePath = "db.txt";
  const branchName = "main";
  var updatedContent = "";
  var url = "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/" + "contents/assets/titels/" + filePath;
  //console.log( + "\n" + token);
  // Obtener el contenido actual del archivo
  fetch( url,
    {
      headers: {
        Authorization: "Bearer " + githubToken,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      try {
        // desincripta y tranforma en JSON
        var Object = JSON.parse(atob(data.content));
        // aunmenta 1, la visita
        Object.localStorage = String(parseInt(Object.localStorage) + 1);
        Object.cooking = String(parseInt(Object.cooking) + 1);
        // crea el localStorage y el cooking
        CrearlocalStorage(Object.localStorage);
        CrearCooking(Object.cooking);
        // actualiza el documento
        var currentContent = JSON.stringify(Object);
        updatedContent = currentContent;
      } catch (error) {
        console.error("Error al parsear el JSON:", error);
      }
      // objeto de datos para la solicitud de actualización
      const updateData = {
        message: "Automatic update JavaScript",
        content: btoa(updatedContent),
        sha: data.sha,
      };
      // Realizar la solicitud PUT para actualizar el contenido
      return fetch('https://api.github.com/repos/' + repoOwner + '/' + repoName + '/' + 'contents/assets/titels/' + filePath + '?ref=' + branchName, {
        method: 'PUT',
        headers: {
          Authorization: 'Bearer ' + githubToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });
    })
    .then((response) => response.json())
    .then((result) => console.log(btoa(result))) //resultado
    .catch((error) => {
      console.log(error);
      //console.error(error)
    });
}

//----------------------------- contador de pagina localStorage ----------------------------------------
function CrearlocalStorage (contadorLocalStorage){
  if (window.localStorage) {
    // localStorage está habilitado
    console.log("localStorage está habilitado.");
    // Verificamos si ya existe un contador en el almacenamiento local
    if (localStorage.getItem("visitCount")) {
      // Si existe, incrementamos el contador
      let count = contadorLocalStorage;
      localStorage.setItem("visitCount", count);
      document.getElementById("count").textContent = count;
    } else {
      // Si no existe, inicializamos el contador a 1
      localStorage.setItem("visitCount", contadorLocalStorage);
      document.getElementById("count").textContent = contadorLocalStorage;
    }
  } else {
    // localStorage no está habilitado
    console.log("localStorage no está habilitado. No podrás utilizarlo.");
  }
}

//----------------------------- contador de pagina cookie----------------------------------------
function CrearCooking (contadorCooking){
  if (navigator.cookieEnabled === false) {
    alert("Por favor, habilita las cookies en tu navegador para usar todas las funciones del sitio.");
  } else {
    setCookie("miCookie", contadorCooking, 7); // La cookie expirará en 7 dias
  }
}
function setCookie(nombre, valor, expiracionDias) {
  if (cookieExiste(nombre)) {
    console.log('existe la cookie');
    const cookies = document.cookie.split(';');
    // Buscar la cookie específica por nombre
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        console.log(cookie);
        // Verificar si la cookie tiene el nombre que estamos buscando
        /*  
            el método startsWith() se utiliza para determinar si una cadena 
            comienza con los caracteres de otra cadena. Este método devuelve 
            true si la cadena invocadora comienza con la cadena especificada 
            como argumento
        */
        if (cookie.startsWith(nombre + '=')) { 
            // Obtener y devolver el valor de la cookie, la base es 10, que es decimal.
            // valor = parseInt(cookie.substring(nombre.length + 1), 10) + 1;
        }
    }
    updateCoockie(nombre,valor,expiracionDias);
  } else {
    console.log('No Existe la cookie');
    var fechaExpiracion = new Date();
    fechaExpiracion.setDate(fechaExpiracion.getDate() + expiracionDias);
    var cookie = nombre + "=" + valor + ";expires=" + fechaExpiracion.toUTCString() + ";path=/";
    document.cookie = cookie;
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
// actualiza coockie
function updateCoockie(nombre, valor, expiracionDias) {
  console.log('se actualiza coockie');
  var fechaExpiracion = new Date();
  fechaExpiracion.setDate(fechaExpiracion.getDate() + expiracionDias);
  var cookie = nombre + "=" + valor + ";expires=" + fechaExpiracion.toUTCString() + ";path=/";
  document.cookie = cookie;
  document.getElementById("countCookies").textContent = valor;
}
//---------------------------------- cargar imagenes ---------------------------------------
document.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll('.image');
  var loaderContainers = document.querySelectorAll('.loader-container');
  var imageContainer = document.querySelector('.image-container');

  function imageProgress(index, event) {
    // Verifica el progreso de carga
    if (event.lengthComputable) {
      var percentage = (event.loaded / event.total) * 100;
      if (percentage >= 75) {
        loaderContainers[index].style.display = 'none';

        // Verifica si todas las imágenes se han cargado al menos al 50%
        var allImagesLoaded = Array.from(loaderContainers).every(function(loaderContainer) {
          return loaderContainer.style.display === 'none';
        });
        
        if (allImagesLoaded) {
          imageContainer.style.display = 'block';
        }
      }
    }
  }

  // Agrega un evento de progreso para cada imagen
  images.forEach(function(image, index) {
    image.addEventListener('progress', function(event) {
      imageProgress(index, event);
    });

    // Agrega un evento de carga para manejar el caso en que no se dispare el evento de progreso
    image.addEventListener('load', function() {
      imageProgress(index, { loaded: 100, total: 100 });
    });
  });

  setTimeout(function() {
    // Muestra las imágenes después de un tiempo aunque no estén completamente cargadas
    imageContainer.style.display = 'block';
    loaderContainers.forEach(function(loaderContainer) {
      loaderContainer.style.display = 'none';
    });
  }, 3000); // Ajusta el tiempo según sea necesario
});
//-------------------------------------------------------------------------------------------





