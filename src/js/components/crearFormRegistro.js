
const d = document

export function darFormularioRegistro(){

    const $form = d.createElement('form')
    const $divForm = d.createElement('div')
    const $TituloForm = d.createElement('h2')
    
    const divElements = [
        {id: "user", name: "nombre", type: "text", labelContent: "Usuario", spanClass: "barra", spanId: "barra"},
        {id: "pass1", name: "", type: "password", labelContent: "Contraseña", spanClass: "barra", spanId: ""},
        {id: "pass2", name: "", type: "password", labelContent: "Verficar Contraseña", spanClass: "barra", spanId: ""},
        {id: "email1", name: "", type: "email", labelContent: "Email", spanClass: "barra", spanId: ""}
        
    ]

    // --> Rellenando elemento
    $TituloForm.innerHTML = "<h2>Registro</h2>"

    // --> 

    // --> Insertando elementos en el form
    $form.appendChild($TituloForm)
    $form.appendChild(rellenarElForm(divElements, $divForm))

    return $form
}   

function rellenarElForm(divElements, $divForm){

    divElements.forEach((elemento) => {

        // --> Creando Elementos.
        const $divGrupo = d.createElement('div')
        const $input = d.createElement('input')
        const $label = d.createElement('label')
        const $spanBar = d.createElement('span')
        const $spanWarning = d.createElement('span')

        // --> Agregando clases e id
        $divGrupo.classList.add('form')

        $divGrupo.classList.add('grupo')

        $spanBar.classList.add('barra')
        $spanBar.setAttribute('id', 'barra')
        
        $spanWarning.classList.add('barra')
        $spanWarning.setAttribute('id', 'barra')

        // --> Seteando Atributos Input
        $input.setAttribute('id', `${elemento.id}`)
        $input.setAttribute('type', `${elemento.type}`)
        $input.setAttribute('name', `${elemento.name}`)
        $input.required = true
    
        // --> Rellenando elementos
        $label.innerText = `${elemento.labelContent}`

        // --> Insertando los elementos al div
        $divGrupo.appendChild($input)
        $divGrupo.appendChild($label)
        $divGrupo.appendChild($spanBar)
        $divGrupo.appendChild($spanWarning)

        // --> Agreando el div al Div general del Form.
        $divForm.appendChild($divGrupo)

    })

    return $divForm
}