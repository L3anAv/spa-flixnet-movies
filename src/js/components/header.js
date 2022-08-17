
const d = document

export function devolverHeader(){

    // --> Creacion de Elementos

    const $a = d.createElement('a')
    const $i = d.createElement('i')
    const $namePage = d.createElement('h1')
    const $header = d.createElement('header')
    const $navPrincipal = d.createElement('nav')

    // --> Menu de Navegacion Principal
    const $navUl = devolverUl();

    // --> Asignacion de Clases al i
    $i.classList.add('fa-solid')
    $i.classList.add('fa-bars')
    $i.classList.add('menu-responsive')

    // --> Asignacion de Clases Elementos
    $a.classList.add('aTitle')
    $namePage.classList.add('title')
    $navUl.classList.add('nav-bar-list')
    $navPrincipal.classList.add('nav-bar')

    // --> Rellenando Elementos 
    $namePage.innerText = "FLIX~NET"

    // --> Insertando href
    $a.setAttribute('href', '/')

    // --> Insertando el Nav por Generos
    $navPrincipal.appendChild($navUl)
    
    // --> Insertando en orden los elementos

    $a.appendChild($namePage)

    $header.appendChild($a)
    $header.appendChild($i)
    $header.appendChild($navPrincipal)

    // --> Retorno el header
    return $header
}

/* Funcion que crea el Ul de para el elemento Nav del Header */
function devolverUl(){
    
    // --> Ul donde esta el Menu De Navegacion
    const $ul = d.createElement('ul')

    // --> li del Ul
    const arrayDeElementosLi = [
        {href: "/", id: "Peliculas", text: "Peliculas"},
        {href: "/tv-series", id: "tv-series", text: "Tv Series"},
        {href: "/estrenos", id: "estrenos", text: "Estrenos"},
        {href: "/registro", id: "registro", text: "¡Obten tu mes Gratis!"},
        {href: "/login", id: "login", text: "Ingresar"}
    ]

    // --> Inserccion de li en Ul
    arrayDeElementosLi.forEach(elemento => {

        // --> Funcion que crea cada li
        const li = crearLi(elemento)

        // --> Inserto el li en el Ul
        $ul.appendChild(li)

    })

    // --> Retorno de Ul ya Relleno
    return $ul
}

function crearLi(elemento){

    const $li = d.createElement('li')
    const $a = d.createElement('a')

    $a.setAttribute('href', `${elemento.href}`)
    $a.setAttribute('id', `${elemento.id}`)
    $a.innerText = `${elemento.text}`
    $li.appendChild($a)

    return $li
}