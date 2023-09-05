const password = document.getElementById("password")
const email = document.getElementById("email")
const form = document.getElementById("form")
const name = document.getElementById("name") 
let warnings = document.getElementById("warnings")


form.addEventListener("submit", e=>{
    e.preventDefault()
    warnings=""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if(name.value.length <6){
        warnings += 'El nombre no es valido <br>'
    }
    if(!regexEmail.test(email.value)){
     warnings += 'El email no es valido <br>'
    }
    if(password.value.length < 8){
        warnings += 'La contraseña debe contener al menos 8 caracteres <br>'
    }
})