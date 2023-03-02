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

//Se crea una lista de servicios

class Servicio{
    constructor(nombreServicio, precioServicio, diaServicio){
        this.nombreServicio = nombreServicio;
        this.precioServicio = precioServicio;
        this.diaServicio = diaServicio;
    }

    get_datos(){
        console.log("............")
        console.log("Nombre del servicio:", this.nombreServicio);
        console.log("Precio del servicio:", this.precioServicio);
        console.log("Dia del servicio", this.diaServicio);
        console.log("............")
    }
}

let lista_servicios = []

lista_servicios.push( new Servicio("Vacumterapia", 500 , "lunes"));
lista_servicios.push( new Servicio("Ondas rusas", 750 , "miercoles"));
lista_servicios.push( new Servicio("Masajes", 490 , "viernes" ));



console.log(lista_servicios);

for ( let servicio of lista_servicios){
    servicio.get_datos();
}

//Seleccion de servicio

function busqueda_servicio(servicio){
    return servicio.nombreServicio == seleccion_servicio
}

let seleccion_servicio = prompt("Ingrese servicio\nVacumterapia\nOndas rusas\nMasajes");

let resultado_busqueda = lista_servicios.find( busqueda_servicio );

while(resultado_busqueda == undefined){

        alert("No se encontro el servicio")
        seleccion_servicio = prompt("Ingrese nuevamente el servicio (respete las  mayusculas y minusculas)\nVacumterapia\nOndas rusas\nMasajes")
        resultado_busqueda = lista_servicios.find( busqueda_servicio )
}

//Se evalua que servicio pidio el cliente

let precio_servicio = 0

if ( seleccion_servicio == "Vacumterapia"){
    precio_servicio = vacum
}
else if ( seleccion_servicio == "Ondas rusas"){
    precio_servicio = ondas
}
else if ( seleccion_servicio == "Masajes"){
    precio_servicio = masajes
}
else{
    console.log("Servicio incorrecto")
}

//Se calcula la cantidad de servicios que solicita el cliente

let cantidad_servicio = 0

do{
    cantidad_servicio = prompt("Ingrese la cantidad de sesiones que desea realizar")
}while(isNaN(cantidad_servicio))

//Se solicita el dia para realizar la sesion del servicio

function busqueda_servicio_dia (servicio){
    return servicio.diaServicio == dias_servicio
}

let dias_servicio = prompt("Ingrese el dia a realizar el servicio\nlunes (20% de descuento)\nmiercoles (15% de descuento)\nviernes (10% de descuento)");

let resultado_busqueda_dias = lista_servicios.find( busqueda_servicio_dia );

while(resultado_busqueda_dias == undefined){

    alert("El dia ingresado no posee servicios activos")
    dias_servicio = prompt("Ingrese nuevamente el dia del servicio (respete las mayusculas y minusculas)\nlunes -- Vacumterapia\nmiercoles -- Ondas rusas\nviernes -- Masajes")
    resultado_busqueda_dias = lista_servicios.find( busqueda_servicio_dia )
}

//Se calcula el porcentaje de descuento dependiendo del dia seleccionado

let descuento_dia = 0

if (dias_servicio == "lunes"){
    descuento_dia = 0.8
}
else if (dias_servicio == "miercoles"){
    descuento_dia = 0.85
}
else if (dias_servicio == "viernes"){
    descuento_dia = 0.90
}
else{
    console.log("Dia sin descuento")
}

//Se calcula el precio final

let precio_final = 0

function precio_total(servicio, cantidad, descuento){
    precio_final = (servicio * cantidad) * descuento
}

precio_total(precio_servicio, cantidad_servicio, descuento_dia);

alert(`El total a pagar es: $${precio_final}`)













