
    let productos=[
        {nombre:"TRAJE DE MINATO",precio:150000,imagen : "../img/naruto1.png", descripcion :"BATA ORIGINAL Y EXCLUSIVA" },
        {nombre:"TRAJE DE NARUTO",precio:160000,imagen : "../img/naruto2.png", descripcion :"BATA ORIGINAL Y EXCLUSIVA" },
        {nombre:"TRAJE DE ITACHI",precio:150000,imagen : "../img/naruto3.png", descripcion :"BATA ORIGINAL Y EXCLUSIVA" },
        {nombre:"GUANTES DE NARUTO ",precio:25000,imagen : "../img/naruto4.png", descripcion :"GUANTES EXCLUSIVOS DE CUERO" },
        {nombre:"BOTAS DE NARUTO",precio:40000,imagen : "../img/naruto5.png", descripcion :"BOTAS ORIGINALES DE CUERO" },
        {nombre:"PELUCA DE KAKASHI ",precio:65000,imagen : "../img/naruto6.png", descripcion :"PELUCA DE COLLECION " },
        {nombre:"MASCARA DE OBITO ",precio:50000,imagen : "../img/naruto7.jpg", descripcion :"MASCARA DE MADERA  Y EXCLUSIVA" },
        {nombre:" CAJA DE KUNAIS",precio:55000,imagen : "../img/naruto8.jpg", descripcion :"ALTAMENTE FILOSOS" },
        {nombre:"ATUENDO DE NARUTO ",precio:95000,imagen : "../img/naruto9.png", descripcion :"AUENDO ECLUSIVO DE ALGODON " },
        {nombre:"DISFRAS DE SAKURA ",precio:100000,imagen : "../img/naruto10.png", descripcion :"DISFRAS CON PELUCA  Y BANDANA NINJA" }

        

    ]
    console.log(productos)


    let fila=document.getElementById("fila")

    // recorrer el arreglo y sacar fotocopia a la iformacion que hay por dentro
    productos.forEach(function(producto){

        let columna=document.createElement("div")

        columna.classList.add("col")

        let tarjeta =document.createElement("div")

        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        let imagen=document.createElement("img")

        imagen.classList.add("card-img-top")
        imagen.classList.add("h-50")
        imagen.classList.add("p-3")
        imagen.src=producto.imagen


        let nombreProducto=document.createElement("h4")
        nombreProducto.classList.add("text-center")
        nombreProducto.textContent=producto.nombre

        let descripcion=document.createElement("h4")
        descripcion.textContent=producto.descripcion
        descripcion.classList.add("text-center")

        let precio=document.createElement("h4")
        precio.classList.add("text-center")
        precio.textContent=producto.precio

        
        // padres e hijos

        tarjeta.appendChild(imagen)
        
        tarjeta.appendChild(nombreProducto)

        tarjeta.appendChild(descripcion)

        tarjeta.appendChild(precio)

        columna.appendChild(tarjeta)

        fila.appendChild(columna)


    })

