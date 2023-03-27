import helpers from "../helpers/helpers.js"

const d = document

/* Colocacion de datos en la Ventana Modal */
export function ventanaModal(id){
    
    // --> Vars para Fetch 
    const api_key = helpers.API_KEY
    const lenguage = '&language=es'

    // --> Ruta: Peliculas
    const dondeObtenerPelis = helpers.API_DB_MOVIE
    const rutaFinalPeliculas = `${dondeObtenerPelis}/${id}?api_key=${api_key}${lenguage}`

    // --> Ruta: Series
    const dondeObtenerTvSeries = helpers.API_DB_TVSERIES
    const rutaFinalTVSeries = `${dondeObtenerTvSeries}/${id}?api_key=${api_key}${lenguage}`
 

    // --> Crear Ventana
    const $ventanaModal = d.createElement('div')

    // --> Agregar Clase
    $ventanaModal.classList.add('ventana-modal')
    

    // --> Fetch segun Path 
    const path = window.location.pathname

    if(path === "/" || path === "/index.html" || window.location.href === "https://l3anav.github.io/spa-flixnet-movies/"){
        fetch(rutaFinalPeliculas)
        .then(response => response.json())
        .then(respuesta => {
       const $fragmento = crearVentanaModal(respuesta, "/")
       $ventanaModal.appendChild($fragmento)
    })

    }else if(path === "/tv-series" || window.location.href === "https://l3anav.github.io/spa-flixnet-movies/"){
        fetch(rutaFinalTVSeries)
        .then(response => response.json())
        .then(respuesta => {
        const $fragmento = crearVentanaModal(respuesta, "/tv-series")
        $ventanaModal.appendChild($fragmento)
    })
    }
    
    // --> Retorno Ventana Modal
    return $ventanaModal

}

function crearVentanaModal(elemento, path){

    // --> Crear ventana Modal
    const $Fragmentoventana = document.createDocumentFragment();

    // --> Axiliares
    const $divSuperior = d.createElement('div')
    const $divMedio = d.createElement('div')

    // --> Elementos
    const $titulo = d.createElement('h2')
    const $tagline = d.createElement('h3')
    const $diaDeSalida = d.createElement('h3')
    const $img = d.createElement('img')
    const $img_companie = d.createElement('img')
    const $p = d.createElement('p')
    const $botonCerrarVentana = d.createElement('i')
    

    // --> Relleno de elementos
    
    let titulo = ''

    if(path === "/"){
        $titulo.innerText = `${elemento.title}`
         titulo = `${elemento.title}`
    }else{
        $titulo.innerText = `${elemento.name}`
        titulo = `${elemento.name}`
    }
    
    if(path === "/"){
        $diaDeSalida.innerText = `${elemento.release_date}`
    }else if(path === "/tv-series"){
       $diaDeSalida.innerText = `${elemento.last_air_date}`
    }

    const valor = `${elemento.production_companies.length}`

    if(valor >= 1){
        $img_companie.src = helpers.API_IMG +  `${elemento.production_companies[0].logo_path}`
        $img_companie.setAttribute('alt',`${elemento.production_companies[0].name}` )
    } else{
        $img_companie.src = ""
    }

    $tagline.innerText = `${elemento.tagline}`
    $img.src = helpers.API_IMG + `${elemento.poster_path}`
    $img.alt = `${titulo}`
    $p.innerText = `${elemento.overview}`
    $botonCerrarVentana.classList.add("fa-solid")
    $botonCerrarVentana.classList.add("fa-xmark")

    // --> Clases
    $img.classList.add('poster-elemento')
    $img_companie.classList.add('logo-empresa')

    // --> Colocacion de Clases
    $divSuperior.classList.add('contenedor-nombre-close')
    $divMedio.classList.add('contenedor-img-p')

    // --> Evento para cerrar la Vetana Modal
    $botonCerrarVentana.addEventListener('click', () =>{
        eliminarVentana()
    })
    
    // --> Inserciones

    /* -~- */
    $divSuperior.appendChild($botonCerrarVentana)
    $divSuperior.appendChild($titulo)

    /* -~- */
    $divMedio.appendChild($img)
    $divMedio.appendChild($p)

    // -~- Inserciones al fragmento -~-
    $Fragmentoventana.appendChild($divSuperior)
    $Fragmentoventana.appendChild($tagline)
    $Fragmentoventana.appendChild($divMedio)
    
    $Fragmentoventana.appendChild($img_companie)
    $Fragmentoventana.appendChild($diaDeSalida)
    
    
    // --> Retorno del Fragmento
    return $Fragmentoventana

}  

function eliminarVentana(){

    // --> Selecciones necesarias
    const $divAEliminar = document.querySelector(".ventana-modal")
    const $dondeEliminar = document.getElementById("main").parentNode.childNodes[2]

    // --> Eliminacion de la ventana Modal
    $dondeEliminar.removeChild($divAEliminar)
    
}