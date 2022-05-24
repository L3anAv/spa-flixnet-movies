
const d = document

export function darFormularioRegistro(){

    const $form = d.createElement('form')
    const $divForm = d.createElement('div')
    const $TituloForm = d.createElement('h2')
    const $buttom = d.createElement('button')

    const divElements = [
        {id: "user", name: "nombre", type: "text", labelContent: "Usuario", spanOneClass: "barra", spanOneId: "barra", spanTwoWarningClass: "warning", spanTwoWarningId: "warning"},
        {id: "pass1", name: "", type: "password", labelContent: "Contraseña", spanClass: "barra", spanId: "", spanTwoWarningClass: "warning", spanTwoWarningId: "warning"},
        {id: "pass2", name: "", type: "password", labelContent: "Verficar Contraseña", spanClass: "barra", spanId: "", spanTwoWarningClass: "warning", spanTwoWarningId: "warning"},
        {id: "email1", name: "", type: "email", labelContent: "Email", spanClass: "barra", spanId: "", spanTwoWarningClass: "warning", spanTwoWarningId: "warning"}
        
    ]

    // --> Clases
    $form.classList.add('padre')
    $divForm.classList.add('form')

    // --> Rellenando elemento
    $TituloForm.innerHTML = "<h2>Registro</h2>"
    $buttom.innerText = "Registrarse"

    // --> Insertando elementos en el form
    $form.appendChild($TituloForm)
    $form.appendChild(rellenarElForm(divElements, $divForm))
    $divForm.appendChild($buttom)

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

        $divGrupo.classList.add('grupo')

        $spanBar.classList.add(`${elemento.spanClass}`)
        $spanBar.setAttribute('id', `${elemento.spanId}`)
        
        $spanWarning.classList.add(`${elemento.spanTwoWarningClass}`)
        $spanWarning.setAttribute('id', `${elemento.spanTwoWarningId}`)

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