/*let numero1 = 100
let numero2 = 90
let resultadoMultiplicacion = numero1 * numero2 //9000
let resultadoResta = numero1 - numero2 //10
let division = numero1 / numero2 // 1,11

numero1 = 1000
resultadoMultiplicacion = resultadoMultiplicacion * numero1 // 9000000
*/
let intentos=1
let identificar = true
do{
let nombreUsuario = prompt ("Decime tu nombre")

    if(nombreUsuario === "" || nombreUsuario === null){
    break
    }
    

    if (nombreUsuario === "Diego Adrian" && intentos<=3){

    alert("Bienvenido " + nombreUsuario)
    identificar=false
    }
    else{
        alert ("no se reconoce el usuario " + nombreUsuario)
        intentos++
        if(intentos>3){
            alert("Isted supero los 3 intentos")
            console.error("No hay mas intentos")
            break;
        }

    }  
}   while(identificar)

const anio = 2023
let anioDeNacimiento = parseInt (prompt("Decime tu año de nacimiento"))
let edad = anio - anioDeNacimiento
let datosUser = ("Bienvenido " + nombreUsuario + "segun mis calculos tenes " + edad + "anios")

if (edad > 18 && edad <60)
    {
        alert("Puedes ingresar al sitio web")
    } else if(edad>60){
        alert ("No puedes ingresar al sitio :(")
    } else if(edad<18){
        alert("Usted no es mayor de edad, no puede ingresar al sitio web :(")
    }else{
        alert("Debe ingresar sus datos correctamente para ingresar al sitio")
    }

alert(datosUser)
console.log (datosUser)

let ayuda = confirm("Buen día! Puedo ayudarte con el producto que buscabas?")

if (consulta===true){
    let producto = prompt("Que producto buscabas? Ingresa el producto")
    let marca = prompt("Selecciona la marca del " + producto)

    switch(marca){
        case "amd":
            alert ("Tenemos " + producto + " de la marca " + marca)
            break

        case "nvidia":
        alert ("Tenemos " + producto + " de la marca " + marca)
            break

        case "gigabyte":
            alert ("Tenemos " + producto + " de la marca " + marca)    
            break
        }
}
