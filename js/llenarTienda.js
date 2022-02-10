    export function llenarTienda(){
    let productos=[
        {nombre:"Traje de Minato",precio:" 150000",imagen : "../img/naruto1.png", descripcion :"BATA ORIGINAL Y EXCLUSIVA" },
        {nombre:"Traje de Naruto",precio:"160000",imagen : "../img/naruto2.png", descripcion :"BATA ORIGINAL Y EXCLUSIVA" },
        {nombre:"Traje de Itachi ",precio:"150000",imagen : "../img/naruto3.png", descripcion :"BATA ORIGINAL Y EXCLUSIVA" },
        {nombre:"Guantes Naruto ",precio:"25000",imagen : "../img/naruto4.png", descripcion :"GUANTES EXCLUSIVOS DE CUERO" },
        {nombre:"Botas de Naruto",precio:"40000",imagen : "../img/naruto5.png", descripcion :"BOTAS ORIGINALES DE CUERO" },
        {nombre:"Peluca de Kakashi ",precio:"65000",imagen : "../img/naruto6.png", descripcion :"PELUCA DE COLLECION " },
        {nombre:"Mascara de Obito ",precio:"50000",imagen : "../img/naruto7.jpg", descripcion :"MASCARA DE MADERA  Y EXCLUSIVA" },
        {nombre:" Caja de Kunais",precio:"55000",imagen : "../img/naruto8.jpg", descripcion :"ALTAMENTE FILOSOS" },
        {nombre:"Atuendo de Naruto ",precio:"95000",imagen : "../img/naruto9.png", descripcion :"AUENDO ECLUSIVO DE ALGODON " },
        {nombre:"Disfras de Sakura",precio:"100000",imagen : "../img/naruto10.png", descripcion :"DISFRAS CON PELUCA  Y BANDANA NINJA" }

    ]
    
    let fila=document.getElementById("fila")

    // recorrer el arreglo y sacar fotocopia a la iformacion que hay por dentro
    productos.forEach(function(producto){

        let columna=document.createElement("div")

        columna.classList.add("col")

        let tarjeta =document.createElement("div")

        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")
        tarjeta.classList.add("fondoTarjeta")

        let imagen=document.createElement("img")

        imagen.classList.add("card-img-top")
        imagen.classList.add("h-50")
        imagen.classList.add("p-3")
        imagen.classList.add("h-100")
        imagen.src=producto.imagen

        let raya=document.createElement("hr")
        raya.classList.add("w-50")
        raya.classList.add("mx-auto")
        raya.classList.add("d-block")

        let nombreProducto=document.createElement("h2")
        nombreProducto.classList.add("text-center")
        nombreProducto.classList.add("text-primary")
        nombreProducto.textContent=producto.nombre

        let descripcion=document.createElement("p")
        descripcion.classList.add("text-center")
        descripcion.classList.add("invisible")
        descripcion.textContent=producto.descripcion
        


        let precio=document.createElement("h4")
        precio.classList.add("text-center")
        precio.classList.add("text-dark")
        precio.textContent=producto.precio
        

        let botonAmpliar=document.createElement("button")
        botonAmpliar.setAttribute("type" , "button")
        botonAmpliar.classList.add("btn")
        botonAmpliar.classList.add("btn-outline-dark")
        botonAmpliar.classList.add("mx-3")
        botonAmpliar.classList.add("mb-5")
        botonAmpliar.textContent="ver producto "
        
        
        // padres e hijos

        tarjeta.appendChild(imagen)
        tarjeta.appendChild(raya)
        tarjeta.appendChild(nombreProducto)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(descripcion)
        tarjeta.appendChild(botonAmpliar)
        //tarjeta.appendChild(descripcion)


        

        columna.appendChild(tarjeta)

        fila.appendChild(columna)


    })
    }
