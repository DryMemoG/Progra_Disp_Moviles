var con =0
function agregartabla(){
    con = con+1
    var nombre=document.getElementById("nombre").value 
    var fecha =document.getElementById("fecha").value
    var saldo= document.getElementById("saldo").value
    var direccion = document.getElementById("direccion").value
    var fila="<tr><td id='id'>"+con+"</td><td>"+nombre+"</td><td>"+fecha+"</td><td>"+saldo+"</td><td>"+direccion+"</td><td><button id='"+con+"' onclick='eliminar(this)'>Eliminar</button></td></tr"
    
    var persona=document.createElement("tr")
    
    persona.innerHTML=fila;
    document.getElementById("tablita").appendChild(persona)

}
function eliminar(elemento){
 
    var row = elemento.parentNode.parentNode;
    row.parentNode.removeChild(row);
      
    
}