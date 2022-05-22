import helpers from "../helpers/helpers.js"
import { devolverTopRated } from "./topRated.js"
import { ventanaModal } from "./ventanaModal.js"
import { fetchMovies } from "../helpers/helpers.js"
import { devolverNavSectionContenido } from "./navPorGeneros.js"

const d = document 

/* Funcion encargada de Enrutar el contenido del body segun path */
export function contenidoParaBody(deDonde){
    
    // --> Contenedor Principal 
    const $sectionPrincipal = d.createElement('section')

    // --> Contenedor de section principal
    const $div = d.createElement('div')

    // --> Agragando Clases
    $div.classList.add('contenedor-principal')
    $sectionPrincipal.classList.add('seccion-principal')
    
    if(deDonde === "movies"){
        
        $sectionPrincipal.appendChild(devolverNavSectionContenido())

        $div.appendChild(devolverContenidoDe(helpers.API_MOVIE_ACTION, deDonde));
        $div.appendChild(devolverTopRated(helpers.API_DE_MOVIE_RATED));
        
        $sectionPrincipal.appendChild($div)

    } else if(deDonde == "TVseries"){
        $sectionPrincipal.appendChild(devolverContenidoDe(helpers.API_DB_TVSERIES_POPULARES, deDonde));
    }else if(deDonde == "estrenos"){
        $sectionPrincipal.appendChild(devolverContenidoDe(helpers.API_DB_MOVIE_UPCOMING, deDonde));
    }

    // --> Retorno el section principal con contenido
    return $sectionPrincipal
}

/* Funcion encargada de devolver el contenido para body de peliculas/series/proximas */
function crearDiv(elementoInsertar, titulo){

    // --> Div Principal
    const $div = d.createElement('div')

    // --> Elementos del div
    const $figure = d.createElement('figure')
    const $img = d.createElement('img')
    const $h1 = d.createElement('h1')
    const $h2 = d.createElement('h2')
    const $h3 = d.createElement('h3')
    const $boton =  d.createElement('button')

    // --> Colocando Clases
    $div.classList.add('pelicula-contenedor')
    $boton.setAttribute('data-id', `${elementoInsertar.id}`)

    // --> Setear Evento a Boton (Ventana Modal)
    $boton.addEventListener('click', (e) =>{
        AbriVentanaModal(e)
    }) 

    // --> Rellenando los datos
    $img.src = helpers.API_IMG + `${elementoInsertar.poster_path}`;
    
    // --> Colocacion de titulo (Correcion Estetica)
    const valueTitle = `${titulo}`

    if(valueTitle.length >= 24){
        $h1.innerText = valueTitle +'...'
    }else{
        $h1.innerText = valueTitle
    }
    
    $h2.innerText = "Calificacion: "
    $h3.innerText = `${elementoInsertar.vote_average}`
    $boton.innerText = 'Ver Informacion'
    
    // --> Insertando los datos en figure
    $figure.appendChild($img)
    $figure.appendChild($h1)
    $figure.appendChild($h2)
    $figure.appendChild($h3)
    $figure.appendChild($boton)
    
    // --> Insertando datos en el Div
    $div.appendChild($figure)

    // --> Retono el div
    return $div

}

export function devolverContenidoDe(lugar, ruta){
    
    // --> Section Principal
    const $section = d.createElement('section')

    // --> Colocando Clases
    $section.classList.add('contenedor-general-contenido')

    // --> Fetch que rellena section segun ruta: movies/tv-series/estrenos
    fetchMovies(lugar).then(movies => {
        
        // Agregar un for con un if para controlar el el path
        
            for (let i = 0; i < 9; i++) {

                if (ruta == "movies") {
                    const titulo = movies[i].title.substring(0,24);
                    $section.appendChild(crearDiv(movies[i], titulo));
                } else if (ruta == "TVseries") {
                    const titulo = movies[i].name.substring(0,24);
                    $section.appendChild(crearDiv(movies[i], titulo));
                } else if (ruta == "estrenos") {
                    const titulo = movies[i].title.substring(0,24);
                    section.appendChild(crearDiv(movies[i], titulo));
                }
            }
        })

    
    // --> Retorno el section
    return $section
}

function AbriVentanaModal(e){

    // --> Funcion que retorna Ventana
    const $ventana = ventanaModal(e.target.getAttribute('data-id'))

    // --> Inserccion de Vetana Modal
    document.getElementById("main").appendChild($ventana)
}