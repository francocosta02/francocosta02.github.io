window.onload=inicio;

var socios = [];
var socio = {};
var idSocio = 0

var inputBuscarSocio = document.getElementById("inputBuscarSocio")
var inputEstadoIngreso = document.getElementById("estadoIngreso")
var btnPagaCuota = document.getElementById("cancelaCuota")

inputBuscarSocio.addEventListener('focusout', buscarSocio)
btnPagaCuota.addEventListener('click' , cancelaCuota)

function inicio (){
    cargarSocios()
}


function buscarSocio() {
    var socioBuscado = socios.find((socio) => {
      return socio.nombre === inputBuscarSocio.value;
    });
  
    if (socioBuscado) {
      idSocio = socios.indexOf(socioBuscado);
  
      if (socioBuscado.ingreso === false) {
        inputEstadoIngreso.value = "Deshabilitado - Deudor";
      } else {
        inputEstadoIngreso.value = "Permitido - Cuota al Dia";
      }
    } else {
        inputEstadoIngreso.value = "Socio No Encontrado";
    }
  }

function cargarSocios() {
    var storedSocios = localStorage.getItem("sociosLS");

    if (storedSocios) {
      socios = JSON.parse(storedSocios);
      }
  }

  function cancelaCuota(){

    socios[idSocio].ingreso = true
    buscarSocio();
    localStorage.setItem("sociosLS", JSON.stringify(socios));
  }