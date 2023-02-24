//Saludo de inicio

let saludo = prompt("Ingrse su nombre")
alert(`Bienvenido/a ${saludo}`)

//Se solicita la altura y el peso para conocer el Indice de Masa Corporal(IMC)
let altura = 0
let peso = 0

do{
    altura = prompt("Ingrese su la altura");
}while (isNaN(altura))

do{
    peso = prompt("Ingrese su peso en kilogramos")
}while (isNaN(peso))

let IndiceMasaCorporal = peso / (altura ** 2)
console.log(IndiceMasaCorporal)

//Se declaran las variables para el precio de los servicios

let vacum = 500

let ondas = 750

let masajes = 490

//Dependiendo del IMC se recomienda la cantidad de servicios para optimizar resultados
const recomendacionSesiones = (peso) =>{
    let precioVacum = vacum * peso
    let precioOndas = ondas * peso
    let precioMasajes = masajes * peso
    alert(`Se recomiendan:\n${peso} sesiones de Vacumterapia ($${precioVacum})\n${peso} sesiones de Ondas rusas ($${precioOndas})\n${peso} sesiones de Masajes descontracturantes ($${precioMasajes})`)
}
    

if (IndiceMasaCorporal <= 18.5){
    recomendacionSesiones (2)
}
else if (IndiceMasaCorporal <= 24.9){
    recomendacionSesiones (4)
}
else if (IndiceMasaCorporal <= 29.9){
    recomendacionSesiones (7)
}
else{
    recomendacionSesiones (10)
}

//Se declaran variables para calcular el total de los servicios solicitados
let sesionesV = Number(prompt("Ingrese la cantidad de sesiones que desea realizar para Vacumterapia"))

let sesionesO = Number(prompt("Ingrese la cantidad de sesiones que desea realizar para Ondas rusas"))

let sesionesM = Number(prompt("Ingrese la cantidad de sesiones que desea realizar para Masajes descontracturantes"))

let subTotal = (vacum * sesionesV) + (ondas * sesionesO) + (masajes * sesionesM)

alert(`Total de servicios es $${subTotal} `)

//Dependiendo del dia que se elige se le aplica cierto porcentaje
let dias = prompt("Indique que dias desea realizar las sesiones\nLunes, martes o miercoles (20% descuento)\nJueves o viernes (15% descuento)\nSabados (10% descuento)")

if ((dias == "lunes") || (dias == "martes") || (dias == "miercoles")){
    let total = subTotal * 0.8
    alert(`El total a pagar es $${total}`)
}
else if ((dias == "jueves") || (dias == "viernes")){
    total = subTotal * 0.85
    alert(`El total a pagar es $${total}`)
}
else if (dias == "sabados"){
    total = subTotal * 0.9
    alert(`El total a pagar es $${total}`)
}
else{
    alert(`"${dias}" no es un dia valido`)
}

