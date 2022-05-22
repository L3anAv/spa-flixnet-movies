
const d = document

/* Funcion que crear el Loader */
export function loader(){

    // --> Creacion de elementos
    const $div0_1 = d.createElement('div')
    const $div1 = d.createElement('div')
    const $div2 = d.createElement('div')
    const $div3 = d.createElement('div')

    // --> Seteando clases y atributos
    $div0_1.classList.add('contenedor-de-loader')
    $div1.classList.add('lds-ripple')
    $div1.setAttribute('id', 'loader')

    // --> Insertando los divs
    $div1.appendChild($div2)
    $div1.appendChild($div3)

    $div0_1.appendChild($div1)
    
    // --> Retorno el Loader
    return $div0_1
}
