
const d = document;

/* Funcion que crea el Login */
export function formParaLogin(){

        // --> Creando los elementos del formulario
        const $FORMULARIO = d.createElement('form'),    
                $divForm = d.createElement('div'),
                $TituloForm = d.createElement('h1'),
                $inputText = d.createElement('input'),
                $inputPass = d.createElement('input'),
                $labelUser = d.createElement('label'),
                $labelPass = d.createElement('label'),
                $span = d.createElement('span'),
                $divGrupoUser = d.createElement('div'),
                $divGrupoPass = d.createElement('div'),
                $boton = d.createElement('button'),
                $aOlvidaste = d.createElement('a'),
                $aRegistrarse = d.createElement('a');


        // --> Colocando las clases a los elementos creados.
        $span.classList.add('barra')
        $divForm.classList.add('form')
        $FORMULARIO.classList.add('padre')
        $divGrupoUser.classList.add('grupo')
        $divGrupoPass.classList.add('grupo')
        $aRegistrarse.classList.add('finalrTextForm')
        $aRegistrarse.classList.add('finalrTextForm1')
        $aOlvidaste.classList.add('finalrTextForm')
        $aOlvidaste.classList.add('finalrTextForm2')
       

        // --> Setear los atributos
        $inputText.setAttribute('type', 'text')
        $inputText.setAttribute('required', '')
        $inputPass.setAttribute('type', 'password')
        $inputPass.setAttribute('required', '')
        $boton.setAttribute('type', 'submit')

        // -->Rellenar con contenido
        $TituloForm.innerText = '¡Bienvenido!'
        $labelUser.innerText = 'Usuario'
        $labelPass.innerText = 'Password'
        $boton.innerText = 'Ingresar'
        $aOlvidaste.innerText = '¿Olvidaste tu contraseña? ¡Recuperala Facilmente!'
        $aRegistrarse.innerText = '¿No tienes cuenta aun? ¡Registrate!'

        // --> Ingresar las Elementos en los divs
        
        // --> Div de user
        $divGrupoUser.appendChild($inputText)
        $divGrupoUser.appendChild($labelUser)
        $divGrupoUser.appendChild($span)

        // --> Div de password
        $divGrupoPass.appendChild($inputPass)
        $divGrupoPass.appendChild($labelPass)
        $divGrupoPass.appendChild($span)

        // --> Insertando todo en el div contenedor
        $divForm.appendChild($divGrupoUser)
        $divForm.appendChild($divGrupoPass)
        $divForm.appendChild($boton)
        $divForm.appendChild($aRegistrarse)
        $divForm.appendChild($aOlvidaste)

        // --> Ingresando todo en el formulario
        $FORMULARIO.appendChild($divForm)

        // --> Retonando el Login
        return $FORMULARIO;  

}