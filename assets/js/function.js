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
//----------------------------------- crear Documento txt -----------------------------------
// Ruta al archivo en tu repositorio
const filePath = "db.txt";

// Nuevos datos que deseas agregar al archivo
const newData = 'Nuevo contenido del archivo.';

// Token de acceso personal de GitHub (necesitas crear uno en tu cuenta)
const githubToken = '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';

// URL del repositorio en GitHub
const repoUrl = 'https://danielcontreras205.github.io/assets/titels/' + filePath;

// Encabezados de la solicitud con el token de acceso
const headers = new Headers({
  'Authorization': 'Bearer ' + githubToken,
  'Content-Type': 'application/json',
});

// Obtener el contenido actual del archivo
fetch(repoUrl, { headers })
  .then(response => response.json())
  .then(data => {
    // Actualizar el contenido del archivo
    // Entonces, btoa y atob trabajan juntas para codificar datos binarios
    console.log(data.content);
    const updatedContent = (data.content + '\n' + newData).trim();
    
    // Crear un objeto de datos para la solicitud de actualización
    const updateData = {
      message: 'Actualización automática del archivo desde JavaScript',
      content: updatedContent,
      sha: data.sha,
    };

    // Realizar la solicitud PUT para actualizar el contenido
    fetch(repoUrl, {
      method: 'PUT',
      headers,
      body: JSON.stringify(updateData),
    })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error(error));
  })
  .catch(error => console.error(error));

