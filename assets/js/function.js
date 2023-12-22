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
const filePath = "https://danielcontreras205.github.io/assets/titels/db.txt";

// Nueva información que deseas escribir en el archivo
const nuevaInformacion = "Esto es un nuevo contenido.";

// Realiza una solicitud PUT al servidor
fetch(filePath, {
  method: "PUT",
  headers: {
    "Content-Type": "text/plain",
  },
  body: nuevaInformacion,
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error en la solicitud.");
    }
    console.log("Archivo editado correctamente.");
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
