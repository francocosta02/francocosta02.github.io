window.onload=inicio;

var inputNombre = document.getElementById('inputNombre');
var inputCategoria = document.getElementById('inputCategoria');
var inputFNac = document.getElementById('inputFNac');
var inputDNI = document.getElementById('inputDNI');
var inputDireccion = document.getElementById('inputDireccion');
const btnGuardarSocio = document.getElementById('guardarSocio')

var socios = [];




btnGuardarSocio.addEventListener('click', guardarSocio)

function inicio(){

    cargarSocios()

}

function guardarSocio(){
    var socio={};

    socio.nombre = inputNombre.value;
    socio.categoria = inputCategoria.value;
    socio.ingreso = false;
    socio.fNac = inputFNac.value;
    socio.documento = inputDNI.value;
    socio.direccion = inputDireccion.value;
    

    inputNombre.value = '';
    inputCategoria.value = '';
    inputFNac.value = '';
    inputDNI.value = '';
    inputDireccion.value = '';

    socios.push(socio);

    localStorage.setItem("sociosLS", JSON.stringify(socios));

}

function cargarSocios() {
    var storedSocios = localStorage.getItem("sociosLS");

    if (storedSocios) {
      socios = JSON.parse(storedSocios);
      }
  }