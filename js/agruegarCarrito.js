export function agregarcarrito(carrito){
    // crear una referencia a la pildora 

    let pildora=document.getElementById("pildora")
    
    
    pildora.classList.remove("invisible")
   // console.log(carrito)

   let contador=0

    carrito.forEach(function(producto){

        contador=contador + Number(producto.cantidad) 

        
        
        

    })
    pildora.textContent=contador
}