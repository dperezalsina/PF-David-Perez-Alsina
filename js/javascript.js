
//Se comienza el script declarando un array vacio para el carrito

let carrito = [];

//Se comprueba en el localstorage si hay un arrary generado para carrito.
//En caso de encontrar uno se reemplaza por el carrito vacio, caso contrario se agrega el carrito vacio al storage

let carrito_en_local = JSON.parse(localStorage.getItem("carrito_local"))

if(carrito_en_local != null){
    carrito = carrito_en_local;
}
else{
    let carrito_1 = JSON.stringify(carrito);

    localStorage.setItem("carrito_local", carrito_1);

}


//Se captura el icono de carrito y se verifica si el carrito ya se muestra o no para mostrarlo al hacer click en el icono

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

icon_carrito.addEventListener("click", mostrar_el_carrito );

icon_carrito.addEventListener("click", randerizar_carrito );

//Se declaran variables para el calculo de la masa corporal, asi se genera una recomendacion de sesiones. 
//Tambien se declaran los precios de los servicios

let altura = 0

let peso = 0

let indiceMasaCorporal = 0

let cantidadSesiones = 0

let vacum = 500

let ondas = 750

let masajes = 490

//Se crea una funcion para capturar los datos ingresados de altura y peso y generar el indice de masa corporal y las recomendaciones
//dependiendo de cual es su indice se le recomiendan al usuario x cantidad de sesiones

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

}

//Se genera una funcion para capturar los botones de cambio de secuencia

function paso1(){
    let divPaso1 = document.getElementById("inicioLista");

    let divPaso2 = document.getElementById("recomendacionesSesiones")

    divPaso1.style.display = 'none';

    divPaso2.style.display = 'flex';
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

//Se genera la funcion para crear un objeto y agregarlo al carrito actual
//Utilizando los switch determina el precio del producto agregado

function agregarCarrito(){
    let nmbServicio = document.querySelector('input[name="servicio"]:checked').value;

    let diaServicio = document.querySelector('input[name="dia"]:checked').value;

    let cantidad_comprar = document.getElementById("cantidad_comprar").value;

    let servicio_descontado = ""

    switch(nmbServicio){
        case "vacumterapia":
            switch(diaServicio){
                case "lunes":
                    servicio_descontado = vacum * 0.8;
                break
                case "miercoles":
                    servicio_descontado = vacum * 0.85;
                break
                case "viernes":
                    servicio_descontado = vacum * 0.9;
                break
            }
        break
        case "ondas_rusas":
            switch(diaServicio){
                case "lunes":
                    servicio_descontado = ondas * 0.8;
                break
                case "miercoles":
                    servicio_descontado = ondas * 0.85;
                break
                case "viernes":
                    servicio_descontado = ondas * 0.9;
                break
            }
        break
        case "masajes":
            switch(diaServicio){
                case "lunes":
                    servicio_descontado = ondas * 0.8;
                break
                case "miercoles":
                    servicio_descontado = ondas * 0.85;
                break
                case "viernes":
                    servicio_descontado = ondas * 0.9;
                break
            }
        break
    }

    let precio_servicio = cantidad_comprar * servicio_descontado

    let producto = {
        servicio: nmbServicio,
        dia: diaServicio,
        cantidad: cantidad_comprar,
        precio: precio_servicio
    }
    
    function alta_producto(objeto){
        return objeto.servicio == producto.servicio && objeto.dia == producto.dia && objeto.cantidad == producto.cantidad
    }

    let producto_nuevo = carrito.find( alta_producto )

    if (producto_nuevo == undefined){
        carrito.push(producto);
    }
    else{
        Toastify({
            text: "Su producto ya se encuentra en el carrito",
            duration: 3000,
            position: "center",
        }).showToast();
    
    }

    let json_carrito = JSON.stringify(carrito);
    
    localStorage.setItem("carrito_local", json_carrito);

 }



let btnAgregarCarrito = document.getElementById("btnAgregarCarrito");

btnAgregarCarrito.addEventListener ( "click" , agregarCarrito );


function mostrarCarrito(){

    let carrito_compras = document.getElementById("carrito_compras");

    if (carrito_compras.style.display != "block"){
        carrito_compras.style.display = "block"
    }
  
}

btnAgregarCarrito.addEventListener ("click", mostrarCarrito)

//Utilizando la funcion randerizar_carrito toma los datos del localstorage y los sobreescribe con el carrito para actualizarlo
//Luego se genera una fila en la tabla con el producto agregado y se le asigna un boton para borrar el mismo producto

function randerizar_carrito(){
    
    carrito_en_local = JSON.parse(localStorage.getItem("carrito_local"));

    carrito = carrito_en_local;

    let tabla_body = document.getElementById("tabla_body");

    tabla_body.innerHTML = ""

    for ( let producto of carrito){
        let fila = document.createElement("tr");

        fila.innerHTML= `<td><h4>${producto.servicio}</h4></td>
                          <td><h5>${producto.dia}</h5></td>   
                          <td><p>${producto.cantidad}</p></td>
                          <td><p>$${producto.precio}</p></td>
                          <i class="fa-solid fa-xmark btn_borrar"  style="color: #ff0000;"></i>
                         `
        fila.style.textAlign = `center`
        tabla_body.append(fila)
    }

    let btn_borrar = document.querySelectorAll(".btn_borrar");

    //Se genera la funcion borrar_producto para capturar el boton de borrar el producto para borrarlo tanto de la lista en pantalla como del localstorage

    function borrar_producto(e){

        let nombre_servicio = e.target.parentNode;

        nombre_servicio.remove();

        let producto_eliminar = nombre_servicio.querySelector("h4").textContent;

        let producto_eliminar_dia = nombre_servicio.querySelector("h5").textContent;

        let producto_eliminar_cantidad = nombre_servicio.querySelector("p").textContent

        let carrito_json = JSON.parse(localStorage.getItem("carrito_local"));

        //Utilizando la funcion filtro_producto se determina cual es el producto a borrar del array del storage, para conseguir una copia del storage
        //pero sin el producto que se desea borrar luego se actualiza el array del carrito actual

        function filtro_producto (nombre){
            
            if (nombre.servicio == producto_eliminar){
                if (nombre.dia == producto_eliminar_dia){
                    if (nombre.cantidad == producto_eliminar_cantidad){
                        return false
                    }
                    else{
                        return true
                    }
                }
                else{
                    return true
                }
            }
            else{
                return true
            }
        }
        
        let carrito_filtrado = carrito_json.filter( filtro_producto )

        carrito_filtrado_jsn = JSON.stringify(carrito_filtrado);

        carrito = carrito_filtrado;

        localStorage.clear("carrito_local");

        localStorage.setItem("carrito_local", carrito_filtrado_jsn)

        precio_calculado = carrito_filtrado.reduce( calculo_total, 0);

        precio_total.innerHTML = `Precio total: $${precio_calculado}`;
 
    }
    

    for ( boton of btn_borrar){

        boton.addEventListener("click", borrar_producto)
    }

    let precio_total = document.getElementById("precio_total");
    
//Utilizando la funcion calculo_total como parametro para realizar un reduce sobre el carrito y de esta manera sumar los precios de
//todos los productos agregados al carrito

    function calculo_total (contador, servicio){
        contador = contador + servicio.precio
        return contador
    }

    let precio_calculado = carrito.reduce( calculo_total, 0)

    precio_total.innerHTML = `Precio total: $${precio_calculado}`

}

btnAgregarCarrito.addEventListener ( "click", randerizar_carrito);

let btn_comprar_carrito = document.getElementById("comprar_productos");

//Con la funcion compra final se determina si el carrito esta con producotos o se encuntra vacio para realizar la compra
//y redirigir al usuario hacia la pagina de compra realizada

function compra_final(){
    if (carrito != 0){
        localStorage.clear("carrito_local"),
        window.location.href = "pages/compra_realizada.html" 
    }

}
btn_comprar_carrito.addEventListener( "click" , compra_final );

function mostrar_ubicacion( ubicacion ){
    let latitud = ubicacion.coords.latitude
    let longitud = ubicacion.coords.longitude

    let clima = document.getElementsByClassName("clima");
    console.log(clima)
    clima.innerHTML = `<p>HOlA</p>`;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=75132db1f8631d3e2bbfe7c47f40595f&units=metric&lang=es`)
    .then( response=> response.json())
    .then( datos_clima=>{
        console.log(datos_clima)
        let clima = document.getElementById("clima")
        clima.innerHTML = `<p class="parrafo_agregado">Ubicacion: <span style="color: green;">${datos_clima.name}</span></p>
                           <p class="parrafo_agregado">Temperatura actual: <span style="color: green;">${datos_clima.main.temp}°C</span></p>
                           <p class="parrafo_agregado">Condicion actual: <span style="color: green;">${datos_clima.weather[0].description}</span></p>
                           <img src="https://openweathermap.org/img/wn/${datos_clima.weather[0].icon}@2x.png">`;    
    })

    console.log(ubicacion)
    console.log(latitud)
    console.log(longitud)

}

navigator.geolocation.getCurrentPosition (mostrar_ubicacion);





