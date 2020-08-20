function cambiar(){
    document.getElementById('parrafo1').innerHTML= "Hola Mundo"
}

function agregarlinea(){
    let parrafo= document.createElement('p')
    parrafo.innerHTML="Hoy es Jueves"
    parrafo.style.color="red"
    parrafo.style.textAlign="center"
    let div =document.getElementById('contenedor')
    div.appendChild(parrafo)

}