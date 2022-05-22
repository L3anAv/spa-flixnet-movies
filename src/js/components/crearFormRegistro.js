
const d = document

export function darFormularioRegistro(){

    const $form = d.createAttribute('form')
    const $divForm = d.createAttribute('div')
    const $TituloForm = d.createAttribute('h2')
    
    const divElements = [
        {id: "user", name: "nombre", type: "text", labelContent: "Usuario", spanClass: "barra", spanId: "barra"},
        {id: "pass1", name: "", type: "password", labelContent: "Contraseña", spanClass: "barra", spanId: ""},
        {id: "pass2", name: "", type: "password", labelContent: "Verficar Contraseña", spanClass: "barra", spanId: ""},
        {id: "email1", name: "", type: "email", labelContent: "Email", spanClass: "barra", spanId: ""}
        
    ]

    const $divParaForm = rellenarElForm(divElements)

}   

function rellenarElForm(divElements){

    divElements.forEach((elemento) => {

        const $input = d.createAttribute('input')

    })

    return;
}