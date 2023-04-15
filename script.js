const anio = 2023
let nombreUsuario = prompt ("Decime tu nombre")
let apellidoUsuario = prompt ("Decime tu apellido")
let anioDeNacimiento = parseInt (prompt("Decime tu año de nacimiento"))


let edad = anio - anioDeNacimiento

/*let numero1 = 100
let numero2 = 90
let resultadoMultiplicacion = numero1 * numero2 //9000
let resultadoResta = numero1 - numero2 //10
let division = numero1 / numero2 // 1,11

numero1 = 1000
resultadoMultiplicacion = resultadoMultiplicacion * numero1 // 9000000
*/
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
    satisfiesgit

let datosUser = `Hola ${nombreUsuario} ${apellidoUsuario}, según mis cálculos tenes ${edad} años`
 
alert(datosUser)
console.log (datosUser)