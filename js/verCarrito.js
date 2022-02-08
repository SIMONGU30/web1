export function verCarrito(carrito){
    let modalVerCarrito  = new bootstrap.Modal(document.getElementById('modalVerCarrito'))

        /*let subtotal
        subtotal= producto.precio*producto.cantidad*/
   

    let contenedor=document.getElementById("contenedorCarrito")
    contenedor.innerHTML=""
    

    /*if(length==0){

        let contenedorNada=document.createElement("div")
        contenedorNada.classList.add("row")

        let fotoNada=document.createElement("img")
        fotoNada.classList.add("fluid")
        fotoNada.classList.add("w-100")
        fotoNada.src="../img/nohayNada.png"

        console.log(fotoNada)

        
        contenedorNada.appendChild(fotoNada)*/

    
        

    carrito.forEach(function(producto){

      


        let fila=document.createElement("div")
        fila.classList.add("row")

        let columna1=document.createElement("div")
        columna1.classList.add("col-12")
        columna1.classList.add("col-md-4")

        let columna2=document.createElement("div")
        columna2.classList.add("col-12")
        columna2.classList.add("col-md-8")

        let fotoProducto=document.createElement("img")
        fotoProducto.classList.add("img-fluid")
        fotoProducto.classList.add("w-100")
        fotoProducto.src=producto.foto

        let nombreProducto=document.createElement("h2")
        nombreProducto.classList.add("text-center")
        nombreProducto.textContent=producto.nombre

        let precioProducto=document.createElement("h4")
        precioProducto.classList.add("text-center")
        precioProducto.textContent=("PRECIO : ")+producto.precio


        let cantidadProducto=document.createElement("h5")
        cantidadProducto.classList.add("text-center")
        cantidadProducto.textContent=("CANTIDAD : ")+producto.cantidad 

        let subtotalProducto=document.createElement("h9")
        subtotalProducto.classList.add("text-center")
        subtotalProducto.classList.add("text-light")
        subtotalProducto.textContent= ("SUBTOTAL : ")+ producto.precio*producto.cantidad

        let raya=document.createElement("hr")
        //raya.classList.add("w-50")
        raya.classList.add("mx-auto")
        raya.classList.add("d-block")


      
        
        

        //padre e hijos

        columna1.appendChild(fotoProducto)
        columna2.appendChild(nombreProducto)
        columna2.appendChild(precioProducto)
        columna2.appendChild(cantidadProducto)
        columna2.appendChild(subtotalProducto)
        columna2.appendChild(raya)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        contenedor.appendChild(fila)



    })
        
    

    modalVerCarrito.show()

    let total=document.getElementById("botonTotal")
    total.addEventListener("click", function(){

        let contador=0

    carrito.forEach(function(producto){

        contador=contador + Number(producto.precio*producto.cantidad)
            
        

    })
    total.textContent=contador

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
        borrarTotal.innerHTML=""
        borrarTotal=[]

       

        
})
    
}
