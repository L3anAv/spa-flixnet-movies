import helpers from "../helpers/helpers.js";
import { fetchMovies } from "../helpers/helpers.js";

const d = document

/* Funcion que devuele el Top Rated de Peliculas */
export function devolverTopRated(lugar){
    
    // --> Seccion 
    const $section = crearAside();

    // --> Fetch para Buscar el Contenido
    fetchMovies(lugar).then(movies => {

        for (let i = 1; i < 5; i++) {
            
                const titulo = movies[i].title;
                $section.appendChild(crearDivTop(movies[i], titulo))            

        }
    })

    // --> Retorno el Section con Contenido
    return $section

}

/* Creacion de los elementos dentro del Top Rated | Inserccion de Informacion */
function crearDivTop(elementoInsertar,titulo){
    
    // --> Elementos del div
    const $div = d.createElement('div')
    const $h1 = d.createElement('h1')
    const $h2 = d.createElement('h2')
    const $img = d.createElement('img')
    const $figure = d.createElement('figure')

    // --> Agregando Clases
    $div.classList.add('div-top-rated')

    // --> Rellenando los datos
    $h1.innerText = `${titulo}`
    $h2.innerHTML = `<span>Puntaje:</span> ${elementoInsertar.vote_average}<span>/10</span>`
    $img.src = helpers.API_IMG + `${elementoInsertar.poster_path}`;

    // --> Rellenando el figure
    $figure.appendChild($img)
    $figure.appendChild($h1)

    // --> Rellenando el Div
    $div.appendChild($figure)
    $div.appendChild($h2)

    // --> Retornando el div
    return $div
    
}

/* Funcion que crea el Aside para el Top Ranking */
function crearAside(){

    // --> Creacion de Elementos
    const $aside = d.createElement('aside')
    const $h2 = d.createElement('h2')

    // --> Colocacion de Clases
    $aside.classList.add('contendedor-top-rated')
    $h2.innerText = "TOP RANKING"

    // --> Insercion de elementos en aside
    $aside.appendChild($h2)

    // --> Return de aside
    return $aside
}

