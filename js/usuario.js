import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"

let modalLoginUsuario=new bootstrap.Modal(document.getElementById('modalLoginUsuario'))

let botonIniciarSesion=document.getElementById("botonIniciarsesion2")
let mensaje=document.getElementById("mensajaIniciarsesion")

console.log(botonIniciarsesion2)


botonIniciarSesion.addEventListener("click",function(event){

  event.preventDefault()

  let email=document.getElementById("cajaEmail").value
  let password=document.getElementById("cajaContraseña").value

  console.log("holaaa")
  

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        mensaje.textContent="HOLA AMIG@"

        
        modalLoginUsuario.show()
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        mensaje.textContent="Tiene su USUARIO o CONTRASEÑA mala"
        modalLoginUsuario.show()
      });

})


 

