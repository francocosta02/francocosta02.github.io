window.onload=inicio;

const tabla = document.getElementById('bodytabla');            
var socios = [];

function inicio(){
  
    cargarSocios(); 

    socios.forEach(socio => {

        if (socio.ingreso == true){
    
        tabla.innerHTML += 
    
                `<tr>
                    <td class="dt-control"></td>
                    <td>${socio.nombre}</td>
                    <td>${socio.categoria}</td>
                    <td>Permitido</td>
                    <td>${socio.documento}</td>
                    <td>${socio.fNac}</td>
                    <td>${socio.direccion}</td>
                </tr>`
        }else{
    
            tabla.innerHTML += 
    
                `<tr>
                    <td class="dt-control"></td>
                    <td>${socio.nombre}</td>
                    <td>${socio.categoria}</td>
                    <td>Denegado</td>
                    <td>${socio.documento}</td>
                    <td>${socio.fNac}</td>
                    <td>${socio.direccion}</td>
                </tr>`
    
        }
    });
}


function cargarSocios() {
    var storedSocios = localStorage.getItem("sociosLS");

    if (storedSocios) {
      socios = JSON.parse(storedSocios);
      }
  }