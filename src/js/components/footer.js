
const d = document

/* Funcion que crea y devuelve el footer */
export function footer(){

    // --> Creacion del Footer
    const $footer = d.createElement('footer')

    // --> Otros Elementos
    const $divTerms = d.createElement('div')
    const $divDerecha = d.createElement('div')
    const $contactoDatos = d.createElement('ul')
    const $divIzquierda = d.createElement('div')
    const $divsContenedor = d.createElement('div')
    const $redesDeContacto = d.createElement('div')


    // --> Agregando Clases
    $contactoDatos.classList.add('datos-contacto-footer')
    $redesDeContacto.classList.add('redes-contacto-footer')
    $divsContenedor.classList.add('div-contenedor-footer')
    $divIzquierda.classList.add('div-izq-footer')
    $divTerms.classList.add('terms-footer')

    // --> Array con datos para li
    const liText = ["0800-111-1111","flixnet@contact.movie","Avenida Siempre Viva 742","Pais Del Nunca Jamas"]

    // --> Relleno los datos de contacto
    liText.forEach(elemento => {
        
        // --> Creo un li
        const $li = d.createElement('li')

        // --> Coloco el datos correspondiente
        $li.innerText = `${elemento}`

        // --> inserto el li
        $contactoDatos.appendChild($li)

    })

    // --> Para rellenar el $redesDeContacto
    $redesDeContacto.innerHTML = '<i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-facebook-square"></i> <i class="fa-brands fa-instagram"></i>'

    // --> Div Derecha Relleno Insercion
    $divDerecha.appendChild($contactoDatos)
    $divDerecha.appendChild($redesDeContacto)

    // --> Rellenando los divs
    $divIzquierda.innerHTML = `<p>Disfruta de todas las peliculas y series en un solo lugar.<br><br> ¡Ingresa para ver todo el contenido disponible!</p>`
    $divTerms.innerHTML = '<ul><li><a>Terms of Service</a></li><li><a>Privacy Policy</a></li><li><a>© FLIXNET, Corp.</a></li></ul>'

    // --> Div Izquiera Insercion
    $divsContenedor.appendChild($divIzquierda)
    $divsContenedor.appendChild($divDerecha)

    // --> Rellenando Footer
    $footer.appendChild($divsContenedor)
    $footer.appendChild($divTerms)
    
    // --> Retorno Footer
    return $footer
}