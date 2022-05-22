import helpers from "../helpers/helpers.js";
import { fetchMovies } from "../helpers/helpers.js";
import { devolverDivSlider } from "./divsSlider.js";

const d = document;

/* Funcion que devuelve el slider con los contenido segun desde donde se lo solicite */
export function SliderParaBody(deDonde){

    // --> Depende del Path, el contendio que se devuelve en el Slider
	if(deDonde === "movies"){
        return sliderConContenido(helpers.API_DB_MOVIE_POPULARES, deDonde);
    } else if(deDonde == "TVseries"){
        return sliderConContenido(helpers.API_DB_TVSERIES_POPULARES, deDonde);
    } else if(deDonde == "estrenos"){
        return sliderConContenido(helpers.API_DB_MOVIE_UPCOMING, deDonde);
    }
}

/* Funcion que crea la seccion slider */
function crearSeccionSlider(){
    
    // --> Creacion de los elementos
    const $SECTION_SLIDER = d.createElement('section');
    $SECTION_SLIDER.classList.add('slider-peliculas');

    // --> Creacion de los I (Utilizando Font Awesome)
    const $I1 = d.createElement('i')
    const $I2 = d.createElement('i')

        // --> Colocacion de Clases
        $I1.classList.add('fa-solid')
        $I2.classList.add('fa-solid')
        $I1.classList.add('fa-chevron-left')
        $I2.classList.add('fa-chevron-right')
    
    // --> Inserccion de los I en Seccion Slider
    $SECTION_SLIDER.appendChild($I1)
    $SECTION_SLIDER.appendChild($I2)

    // --> Retono El Section
    return $SECTION_SLIDER;
}

/* Funcion que Inserta los contenidos dentro del Slider */
function sliderConContenido(lugar, ruta){

    // --> Creacion del Section para Slider
    const $slider = crearSeccionSlider();

    // --> Creacion del div
    const $divSliders = d.createElement('div');
    $divSliders.classList.add('contenedor-peliculas')

    // --> Fetch de contenido para Slider segund Path
    fetchMovies(lugar).then(movies => {

        for (let i = 0; i < helpers.CANTIDAD_DIAPOS_SLIDER; i++) {

            if(ruta == "movies" || ruta == "estrenos"){
                const titulo = movies[i].title;
		        $divSliders.appendChild(devolverDivSlider(movies[i], i, titulo));
            } else if(ruta == "TVseries"){
                const titulo = movies[i].name;
		        $divSliders.appendChild(devolverDivSlider(movies[i], i, titulo)); 
            }

        }

    })

    // --> Inserccion del Div
    $slider.insertAdjacentElement('afterbegin', $divSliders)
    
    // --> Retorno el Section del Slider
    return $slider
}