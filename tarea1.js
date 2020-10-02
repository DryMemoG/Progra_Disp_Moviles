//EJERCICIO 1
var edad=0
function personas(arreglo)
{
    for (i = 0; i <(arreglo.lenght)/2; i+2 )
    {
        edad=edad+arreglo[i]
    }
    var prom = edad/arreglo.lenght/2
    console.log("Promedio: ",prom )

}
let arreglo1 = ["Guillero",24,"Enrique",22,"Manuel",20,"Edwin",20]
personas(arreglo1)

//EJERCICIO2

let fflecha=(a,b,c)=>{
    
    let arreglo=[]
    arreglo.push(a)
    arreglo.push(b)
    arreglo.push(c)
    return(arreglo)
}
console.log(fflecha("Hola","Wenas","Como le va Inge?"))

//EJERCICIO 3
function sumanum(arreglo)
{
    
}
