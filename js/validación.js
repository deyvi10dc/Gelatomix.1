const apellidoIngresado = document.getElementById("apellido")

const nombreIngresado = document.getElementById("nombre")

const email = document.getElementById("correo")

const boton = document.getElementById("boton")



boton.addEventListener("click",(e)=> {
    e.preventDefault();
   

    console.log("nombre", nombreIngresado.value);

    const apellido = apellidoIngresado.value

    for (let i = 0; i<apellido.length; i++) {
        var codigo = apellido.charCodeAt(i);
        if(apellido!="" && (codigo>=65 && codigo<=90) || (codigo>=97 && codigo<=122)){
            
        }else if ((apellido=="" || !(codigo>=65 && codigo<=90) || (codigo>=97 && codigo<=122))) {
            
            alert("el apellido no puede tener numeros o caracteres especiales")

        }else {
            alert("ingrese su apellido correctamente")
        }
    }

})


boton.addEventListener("click",(e)=> {

    e.preventDefault();

    console.log("nombre", nombreIngresado.value);

    const nombre = nombreIngresado.value

    for (let i = 0; i<nombre.length; i++) {
        var codigo = nombre.charCodeAt(i);
        if(nombre!="" && (codigo>=65 && codigo<=90) || (codigo>=97 && codigo<=122)){
            
        }else if ((nombre=="" || !(codigo>=65 && codigo<=90) || (codigo>=97 && codigo<=122))) {
            
            alert("el nombre no puede tener numeros o caracteres especiales")

        }else {
            alert("ingrese su nombre correctamente")
        }
    }

})


boton.addEventListener("click",(e)=>{
    e.preventDefault();
    
    console.log("correo", email.value)

    const emailIngresado = email.value
    validarCorreo(emailIngresado);
})

const validarCorreo = (correo)=>{
    let expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let verificar = expReg.test(correo);
    if(verificar ==true){
        
        alert("el correo válido");
    
    }else{
        alert("el correo no es valido")
    }
}


  

boton.addEventListener("click",()=> {
    valorIngresado = document.getElementById("campo").value;
    if( valorIngresado == null || valorIngresado.length == 0 || /^\s+$/.test(valorIngresado) ) {

      alert('su mensaje esta vacio');
      
    }

   
})





