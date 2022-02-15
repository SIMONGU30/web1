// importo libreria de autenticacion
//

import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"


// para registrar una persona 

let botonRegistro=document.getElementById("botonRegistro")
let mensajeLogin=document.getElementById("mensajaLogin")

//creo una referencia local

let modalLogin=new bootstrap.Modal(document.getElementById('modalLogin'))



botonRegistro.addEventListener("click",function(event){

    event.preventDefault()

    // obtenemos el valor de cada input 

    let email=document.getElementById("cajaEmail").value
    let password=document.getElementById("cajaContraseña").value


    console.log(email)
    console.log(password)

    // agruegar la rutina para llevar los datos firebase

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
    // Signed in
     const user = userCredential.user;

      
     mensajeLogin.textContent="exito en el registro"

     modalLogin.show()
    // ...
    console.log("todo bien papito")
  })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    mensajeLogin.textContent=`error : ${errorCode} :  ${errorMessage} `

     modalLogin.show()
    // ..
    console.log("error ")
  })
  });



  // boton ingreso**********************************************************************.

  

 

  

