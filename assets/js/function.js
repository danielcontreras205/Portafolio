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
const githubToken = token;
const repoOwner = 'danielcontreras205';
const repoName = 'danielcontreras205.github.io';
const filePath = 'db.txt';
const branchName = 'main';
var updatedContent = '';

var url = 'https://api.github.com/repos/' + repoOwner + '/' + repoName + '/' + 'contents/assets/titels/' + filePath;
console.log(url + "\n" + token);

// Obtener el contenido actual del archivo
fetch('https://api.github.com/repos/' + repoOwner + '/' + repoName + '/' + 'contents/assets/titels/' + filePath, {
  headers: {
    Authorization: 'Bearer ' + githubToken,
  },
})
  .then(response => response.json())
  .then(data => {
    //desincripta y tranforma en JSON
    try {
      var Object = JSON.parse(atob(data.content));
      Object.content = String(parseInt(localStorage.getItem("visitCount")) + 1);
      var currentContent = JSON.stringify(Object);
      updatedContent = currentContent;
    } catch (error) {
      console.error('Error al parsear el JSON:', error);
    }
    // objeto de datos para la solicitud de actualización
    const updateData = {
      message: 'Automatic update JavaScript',
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
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));