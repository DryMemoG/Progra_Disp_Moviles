var map1 = new Map()

function click_() {
    var btn = document.getElementById("btn").innerHTML
    if (btn.toLowerCase() == "añadir") {
        add()
    } else if (btn.toLowerCase() == "actualizar") {
        update()
    }
}

function add() {
    var nombre = document.getElementById("nombre"),
        nacimiento = document.getElementById("nacimiento"),
        saldo = document.getElementById("saldo"),
        direccion = document.getElementById("direccion"),
        tabla = document.getElementById("tabla"),
        row = document.createElement("tr")

    var ctn = document.getElementById("contador")
    ctn.innerHTML = String(parseInt(ctn.innerHTML) + 1)
    
    row.id = "fila-" + ctn.innerHTML
    
    let name = document.createElement("td")
    name.innerHTML = nombre.value
    let born = document.createElement("td")
    born.innerHTML = nacimiento.value
    let s = document.createElement("td")
    s.innerHTML = saldo.value
    let address = document.createElement("td")
    address.innerHTML = direccion.value
    //CREACION DEL BOTON "EDITAR"
    let editBtnRow = document.createElement("td"),
        editBtn = document.createElement("button")
    editBtn.innerHTML = "Editar"
   
    editBtn.onclick = function () {
        localStorage.rowID = row.id
        nombre.value = row.childNodes[0].firstChild.nodeValue
        nacimiento.value = row.childNodes[1].firstChild.nodeValue
        saldo.value = row.childNodes[2].firstChild.nodeValue
        direccion.value = row.childNodes[3].firstChild.nodeValue

        document.getElementById("btn").innerHTML = "Actualizar"
    }
    //CREACION DEL BOTON "ELIMINAR"
    let btnRow = document.createElement("td"),
        btn = document.createElement("button")
    btn.innerHTML = "Eliminar"
    
    btn.onclick = function () {
        map1.delete(row.id)
        console.log(map1)
        tabla.removeChild(row)
        ctn.innerHTML = String(parseInt(ctn.innerHTML) - 1)
    }
    //ADICION DE HIJOS A LOS ELEMENTOS
    btnRow.appendChild(btn)
    editBtnRow.appendChild(editBtn)
    row.appendChild(name)
    row.appendChild(born)
    row.appendChild(s)
    row.appendChild(address)
    row.appendChild(editBtnRow)
    row.appendChild(btnRow)
    tabla.appendChild(row)
    //Add map
    map1.set(row.id, row)
    console.log(map1)
    //Limpiar campos
    nombre.value = ""
    nacimiento.value = ""
    saldo.value = ""
    direccion.value = ""
}

function update() {
    
    var row = document.getElementById(localStorage.rowID),
        nombre = document.getElementById("nombre"),
        nacimiento = document.getElementById("nacimiento"),
        saldo = document.getElementById("saldo"),
        direccion = document.getElementById("direccion")
    //acceder al campo por posicion
    row.childNodes[0].firstChild.nodeValue = nombre.value
    row.childNodes[1].firstChild.nodeValue = nacimiento.value
    row.childNodes[2].firstChild.nodeValue = saldo.value
    row.childNodes[3].firstChild.nodeValue = direccion.value
    map1.set(row.id, row)
    console.log(map1)
    document.getElementById("btn").innerHTML = "Añadir"
    localStorage.clear()

    nombre.value = ""
    nacimiento.value = ""
    saldo.value = ""
    direccion.value = ""
}