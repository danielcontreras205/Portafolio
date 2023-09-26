//abrir modal
function modal(x){
    const modal = document.getElementById('modal1');
    modal.classList.replace('modalOculto','modalPublico');
    var phat = "assets/modales/Error.html";
    if(x==1){
      phat = "assets/modales/modal1.html";
    }else if(x == 2){
      phat = "assets/modales/modal2.html";
    }else if(x == 3){
      phat = "assets/modales/modal3.html";
    }
    document.getElementById("iframer").src=phat;
}
//cerrar modal
const botonmodal = document.getElementById('cerrarModal');
botonmodal.addEventListener('click', function (){
  const modal = document.getElementById('modal1');
  modal.classList.replace('modalPublico','modalOculto');
  // redirecionar el modal al de rror para cortar video de la modal 2 
  var phat = "assets/modales/Error.html";
  document.getElementById("iframer").src=phat;
});