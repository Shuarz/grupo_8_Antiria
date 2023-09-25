window.onload = function () {
    let formulario = document.getElementById('validForm')
    console.log(formulario)

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        let errores = [];

        const nombre = document.getElementById('nombre')

        if (nombre.value == '') {
            errores.push("el campo nombre debe estar completo")

        }

        const apellido = document.getElementById('apellido')

        if (apellido.value == '') {
            errores.push("el campo apellido debe estar completo")

        }


        const mail = document.getElementById('email')

        if (mail.value == '') {
            errores.push("el campo email debe estar completo")

        }

        const terminos = document.getElementById('recordar')

        if (recordar.value != true){
            errores.push("debe aceptar los terminos y condiciones")
        }


        const contra = document.getElementById('password')
        if (contra.value == '') {
            errores.push("el campo contraseña debe estar completo.")

        } else if (contra.length < 5) {
            errores.push("el campo debe tener al menos 5 caracteres")
        }

        const repcontra = document.getElementById('repcontraseña')
        if (repcontra.value == '') {
            errores.push("el campo de confirmar contraseña debe estar completo")

        } else if (repcontra.length < 5) {
            errores.push("el campo debe tener al menos 5 caracteres")
        }

        if (errores.length > 0) {
            e.preventDefault();

            let ulErrores = document.getElementById('listaErrores')

            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<ul>" + errores[i] + "</ul>"

            }
        }

    })
}