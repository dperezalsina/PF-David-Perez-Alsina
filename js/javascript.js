
let carrito = [];

let mostrar_carrito = document.getElementById("icon_carrito")

function mostrar_el_carrito(){
    let carrito_compras = document.getElementById("carrito_compras");

    if (carrito_compras.style.display == "block"){
        carrito_compras.style.display = "none"
    }

    else{
        carrito_compras.style.display = "block"
    }

}

icon_carrito.addEventListener("click", mostrar_el_carrito )


let altura = 0

let peso = 0

let indiceMasaCorporal = 0

let cantidadSesiones = 0


function datos(){

    altura = document.getElementById("inputAltura");

    peso = document.getElementById("inputPeso");

    let parrafoImc = document.getElementById("parrafoImc");

    let parrafoSesiones = document.getElementById("parrafoSesiones");
    
    indiceMasaCorporal = peso.value / (altura.value ** 2);
    indiceMasaCorporal = parseInt(indiceMasaCorporal);

    if (indiceMasaCorporal <= 18.5){
        cantidadSesiones = 2
    }
    
    else if (indiceMasaCorporal <=24.9){
        cantidadSesiones = 4
    }

    else if (indiceMasaCorporal <=29.9){
        cantidadSesiones = 7
    }
    else{
        cantidadSesiones = 10
    }

    parrafoImc.innerHTML = "Su Indice de Masa Corporal es: " + indiceMasaCorporal

    parrafoSesiones.innerHTML = "Se recomiendan las siguientes sesiones: " + cantidadSesiones + " vacumterapia, " + cantidadSesiones + " ondas rusas y " + cantidadSesiones + " masajes"

    console.log(indiceMasaCorporal);

    console.log(altura.value , peso.value);
}

function paso1(){
    let divPaso1 = document.getElementById("inicioLista");

    let divPaso2 = document.getElementById("recomendacionesSesiones")

    divPaso1.style.display = 'none';

    divPaso2.style.display = 'flex';


    console.log(divPaso1.style)
}


let botonEnviar = document.getElementById("botonEnviar");

botonEnviar.addEventListener ("click" , datos );

botonEnviar.addEventListener ("click" , paso1);


let botonAtras = document.getElementById("botonAtras");

botonAtras.addEventListener("click", function(){

    let divPaso1 = document.getElementById("inicioLista");

    let divPaso2 = document.getElementById("recomendacionesSesiones");

    divPaso1.style.display = 'flex';

    divPaso2.style.display = 'none';

} )

function paso3(){
    let divPaso2 = document.getElementById("recomendacionesSesiones")

    let divPaso3 = document.getElementById("listService");

    divPaso2.style.display = 'none';

    divPaso3.style.display = 'flex';
}

let botonContinuar = document.getElementById("botonContinuar");

botonContinuar.addEventListener("click" , paso3);

let btnAtras = document.getElementById("btnAtras");

function volverPaso2(){
    let divPaso2 = document.getElementById("recomendacionesSesiones");

    let divPaso3 = document.getElementById("listService");

    divPaso2.style.display = 'flex';

    divPaso3.style.display = 'none';
}

btnAtras.addEventListener( "click" , volverPaso2 )

function agregarCarrito(){
    let nmbServicio = document.querySelector('input[name="servicio"]:checked').value;

    let diaServicio = document.querySelector('input[name="dia"]:checked').value;

    let cantidad_comprar = document.getElementById("cantidad_comprar").value;

    let producto = {
        servicio: nmbServicio,
        dia: diaServicio,
        cantidad: cantidad_comprar,
    }

    carrito.push(producto);

    let json_carrito = JSON.stringify(carrito);
    
    localStorage.setItem("carrito_local", json_carrito);

    console.log(carrito);
 }

let vacum = 500

let ondas = 750

let masajes = 490

let btnAgregarCarrito = document.getElementById("btnAgregarCarrito");

btnAgregarCarrito.addEventListener ( "click" , agregarCarrito );

function randerizar_carrito(){
    
    let tabla_body = document.getElementById("tabla_body");

    tabla_body.innerHTML = ""

    let precio = 0

    

    for ( let producto of carrito){
        let fila = document.createElement("tr");

        switch(producto.servicio){
            case "vacumterapia":
                precio = vacum;
                break
            
            case "ondas rusas":
                precio = ondas;
                break
            
            default:
                precio = masajes;
                break
        }

        fila.innerHTML = `<td><h4>${producto.servicio}</h4></td>
                          <td><p>${producto.dia}</p></td>   
                          <td><p>${producto.cantidad}</p></td>
                          <td><p>$${precio}</p></td>
                          <i class="fa-solid fa-xmark btn_borrar"  style="color: #ff0000;"></i>
                         `
        fila.style.textAlign = `center`
        tabla_body.append(fila)
    }

    let btn_borrar = document.querySelectorAll(".btn_borrar");

    function borrar_producto(e){
        console.log(e.target)

        let nombre_servicio = e.target.parentNode;

        nombre_servicio.remove();

        let producto_eliminar = nombre_servicio.querySelector("h4").textContent;
        
        console.log(producto_eliminar)

        let carrito_json = JSON.parse(localStorage.getItem("carrito_local"));
    
        function filtro_producto (nommbre){
            
            return nommbre.servicio != producto_eliminar;
        }
        
        let carrito_filtrado = carrito_json.filter( filtro_producto )

        carrito = carrito_filtrado

    }
    

    for ( boton of btn_borrar){

        boton.addEventListener("click", borrar_producto)
    }
}

btnAgregarCarrito.addEventListener ( "click", randerizar_carrito);








//Se declaran las variables para el precio de los servicios



    
//Se crea una lista de servicios

// class Servicio{
//     constructor(nombreServicio, precioServicio, diaServicio){
//         this.nombreServicio = nombreServicio;
//         this.precioServicio = precioServicio;
//         this.diaServicio = diaServicio;
//     }

//     get_datos(){
//         console.log("............")
//         console.log("Nombre del servicio:", this.nombreServicio);
//         console.log("Precio del servicio:", this.precioServicio);
//         console.log("Dia del servicio", this.diaServicio);
//         console.log("............")
//     }
// }

// let lista_servicios = []

// lista_servicios.push( new Servicio("Vacumterapia", 500 , "lunes"));
// lista_servicios.push( new Servicio("Ondas rusas", 750 , "miercoles"));
// lista_servicios.push( new Servicio("Masajes", 490 , "viernes" ));



// console.log(lista_servicios);

// for ( let servicio of lista_servicios){
//     servicio.get_datos();
// }

// Seleccion de servicio

// function busqueda_servicio(servicio){
//     return servicio.nombreServicio == seleccion_servicio
// }

// let seleccion_servicio = prompt("Ingrese servicio\nVacumterapia\nOndas rusas\nMasajes");

// let resultado_busqueda = lista_servicios.find( busqueda_servicio );

// while(resultado_busqueda == undefined){

//         alert("No se encontro el servicio")
//         seleccion_servicio = prompt("Ingrese nuevamente el servicio (respete las  mayusculas y minusculas)\nVacumterapia\nOndas rusas\nMasajes")
//         resultado_busqueda = lista_servicios.find( busqueda_servicio )
// }

// Se evalua que servicio pidio el cliente

// let precio_servicio = 0

// if ( seleccion_servicio == "Vacumterapia"){
//     precio_servicio = vacum
// }
// else if ( seleccion_servicio == "Ondas rusas"){
//     precio_servicio = ondas
// }
// else if ( seleccion_servicio == "Masajes"){
//     precio_servicio = masajes
// }
// else{
//     console.log("Servicio incorrecto")
// }

// Se calcula la cantidad de servicios que solicita el cliente

// let cantidad_servicio = 0

// do{
//     cantidad_servicio = prompt("Ingrese la cantidad de sesiones que desea realizar")
// }while(isNaN(cantidad_servicio))

// Se solicita el dia para realizar la sesion del servicio

// function busqueda_servicio_dia (servicio){
//     return servicio.diaServicio == dias_servicio
// }

// let dias_servicio = prompt("Ingrese el dia a realizar el servicio\nlunes (20% de descuento)\nmiercoles (15% de descuento)\nviernes (10% de descuento)");

// let resultado_busqueda_dias = lista_servicios.find( busqueda_servicio_dia );

// while(resultado_busqueda_dias == undefined){

//     alert("El dia ingresado no posee servicios activos")
//     dias_servicio = prompt("Ingrese nuevamente el dia del servicio (respete las mayusculas y minusculas)\nlunes -- Vacumterapia\nmiercoles -- Ondas rusas\nviernes -- Masajes")
//     resultado_busqueda_dias = lista_servicios.find( busqueda_servicio_dia )
// }

// Se calcula el porcentaje de descuento dependiendo del dia seleccionado

// let descuento_dia = 0

// if (dias_servicio == "lunes"){
//     descuento_dia = 0.8
// }
// else if (dias_servicio == "miercoles"){
//     descuento_dia = 0.85
// }
// else if (dias_servicio == "viernes"){
//     descuento_dia = 0.90
// }
// else{
//     console.log("Dia sin descuento")
// }

// Se calcula el precio final

// let precio_final = 0

// function precio_total(servicio, cantidad, descuento){
//     precio_final = (servicio * cantidad) * descuento
// }

// precio_total(precio_servicio, cantidad_servicio, descuento_dia);

// alert(`El total a pagar es: $${precio_final}`)













