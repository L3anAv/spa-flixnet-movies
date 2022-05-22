
const d = document

export function devolverDivRegistrarse(){

    // --> Creando elementos    
    const $divPrincipal = d.createElement('div')
    const $buttom =  d.createElement('button')
    const $p = d.createElement('p')
    const $a = d.createElement('a')
    
    // --> Colocando Clases e id
    $divPrincipal.id = 'registrarse-antes-footer'
    $divPrincipal.classList.add('registrarse-antes-footer')

    // --> Rellenando Elementos
    $a.innerText = "¡Registrarse!"
    $p.innerText = "¡Obten nuestro catalogo completo!"
    
    // --> Colocando Propiedades
    $a.setAttribute('id', 'registro')
    $a.setAttribute('href', '/registro')

    // --> Rellenando Div
    $buttom.appendChild($a)
    $divPrincipal.appendChild($p)
    $divPrincipal.appendChild($buttom)


    return $divPrincipal
}