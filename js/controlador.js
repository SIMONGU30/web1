// importacion de elementos 
import {llenarTienda} from"./llenarTienda.js"
import {ampliarInfoProducto}from"./ampliarInfoProducto.js"
import{agregarcarrito} from "./agruegarCarrito.js"
import{verCarrito} from "./verCarrito.js"

// variables globales

let producto={}
let carrito=[]



// llamo a la funcion llenar tienda

llenarTienda()
// llamo a la infoproducto

    let modalinfoproducto  = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
    let listaProductos=document.getElementById("fila")
    listaProductos.addEventListener("click",function(event){
    
    producto=ampliarInfoProducto(event)

    modalinfoproducto.show()
})

// llamo a la fumcion agruegar carrito

    let botonAgregarCarrito=document.getElementById("botonAgregarProducto")
    
    botonAgregarCarrito.addEventListener("click",function(){

        
    let cantidadProducto=document.getElementById("cantidadProducto").value
    
    producto.cantidad=cantidadProducto
    carrito.push(producto)
    

    // oculto la modal 
    modalinfoproducto.hide()

    let etiquetaCantidad=document.getElementById("cantidadProducto")
    etiquetaCantidad.value=1
    //lamar la funcion agruegarcarrito


    agregarcarrito(carrito)

    
})



  //llamar ver carrito


let botonCarrito=document.getElementById("botonCarrito")

botonCarrito.addEventListener("click",function(){

    verCarrito(carrito)
})
let botonLimpiar=document.getElementById("botonLimpiar")


    botonLimpiar.addEventListener("click",function(){

        
        
        let contenedorModal=document.getElementById("contenedorCarrito")
        contenedorModal.innerHTML=""
        contenedorModal=[]

        let pildora=document.getElementById("pildora")
        pildora.innerHTML=""
        pildora=[]
        

        let borrarTotal=document.getElementById("botonTotal")
        borrarTotal.innerHTML="total"
        borrarTotal=[]

        let cambiarUsd=document.getElementById("botonCamniarUsd")
        cambiarUsd.innerHTML="USD"
        cambiarUsd=[]

        carrito=[]
        

       
     
        
})





