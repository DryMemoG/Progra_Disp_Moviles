function decirhola(){
    console.log('Hola')
}

let a = decirhola
//funcion anonima

let b= function(){
    console.log("Hola desde una función anónima")
}

b()

let c=()=>{
    console.log("hola desde funcion de flecha 1")
}
c()
let d =(x,y,z)=>{
    console.log(x+ ' '+y+'edad: '+z+' desde función flecha 2')
}
d('Guillermo','Galindo',24)

let e =k =>{
    console.log(k)
}
let obj={
    nombre: "Guillermo",
    edad:24,
    fn: function(){console.log("hola desde el objeto")}

}
let v=['Guillermo',12,'Hoy es jueves']
let z =300
e(obj)
e(z)