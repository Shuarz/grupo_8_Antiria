window.onload = function () {
    let formulario = document.querySelector('.validForm')
    console.log(formulario)





    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        let errores = [];



        const mail = document.querySelector('#mail')

        if (mail.value == '') {
            errores.push('el campo email debe estar completo ')

        }


        const contra = document.querySelector('#contraseña')
        if (contra.value == '') {
            errores.push('el campo contraseña debe estar completo. ')

        } else if (contra.length < 5) {
            errores.push('el campo debe tener al menos 5 caracteres')
        }

        if (errores.length > 0) {
            e.preventDefault();

            let ulErrores = document.querySelector('#listaErrores')
            ulErrores.innerHTML =''

            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<ul>" + errores[i] + "</ul>"

            }
        } else {

            formulario.submit()
        }





    })
}



