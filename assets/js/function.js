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
const githubTokenCode = 'eHExenh6TlhWcVZ6aVFNamp0TDBabG5UbDJvbURyMG9KUUp5';
var token = "ghp_" + atob(githubTokenCode);
const githubToken = token; // Reemplaza con tu token de acceso personal
const repoOwner = 'danielcontreras205';
const repoName = 'danielcontreras205.github.io';
const filePath = 'db.txt';

// Obtener el contenido actual del archivo
fetch('https://api.github.com/repos/'+ repoOwner +'/'+ repoName +'/'+'contents/assets/titels/'+filePath, {
  headers: {
    Authorization: 'Bearer'+githubToken,
  },
})
  .then(response => response.json())
  .then(data => {
    const currentContent = atob(data.content);

    // Modificar el contenido según sea necesario
    const newData = 'Nuevo contenido del archivo.';
    const updatedContent = currentContent + '\n' + newData;

    // Crear objeto de datos para la solicitud de actualización
    const updateData = {
      message: 'Actualización automática del archivo desde JavaScript',
      content: btoa(updatedContent),
      sha: data.sha,
    };

    // Realizar la solicitud PUT para actualizar el contenido
    return fetch('https://api.github.com/repos/'+ repoOwner +'/'+ repoName +'/'+'contents/assets/titels/'+filePath, {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer'+ githubToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
    });
  })
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));