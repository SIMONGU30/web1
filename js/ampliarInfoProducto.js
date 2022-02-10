export  function ampliarInfoProducto(event){

    let producto={}
    

    if(event.target.classList.contains("btn")){
       

         producto={
            foto:event.target.parentElement.querySelector("img").src,
            nombre:event.target.parentElement.querySelector("h2").textContent,
            precio:event.target.parentElement.querySelector("h4").textContent,
            descripcion:event.target.parentElement.querySelector("p").textContent
        }
        
        let etiquetaNombreProducto=document.getElementById("nombreProducto")
        etiquetaNombreProducto.classList.add("text-warning")
        etiquetaNombreProducto.textContent=producto.nombre

        let etiquetaPrecioProducto=document.getElementById("precioProduco")
        etiquetaPrecioProducto.textContent=producto.precio 
        

        let etiquetaImagenProducto=document.getElementById("imagenProducto")
        etiquetaImagenProducto.src=producto.foto

        let etiquetaDescripcionProducto=document.getElementById("descripcionProducto")
        etiquetaDescripcionProducto.textContent=producto.descripcion

        return (producto)
        
    }
}