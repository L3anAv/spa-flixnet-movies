
/* Sujeta a Fusionarse con Slider */

const d = document;
const API_IMG = "https://image.tmdb.org/t/p/original";

/* Funcion que devuelve DIV con contenido Solicitado */
export function devolverDivSlider(elementoInsertar, index, titulo){
    
    // --> Div 
    const $div_contenedor = d.createElement('div');
    
    // --> Agregando Clases
    $div_contenedor.classList.add('pelicula--show'); // Agrego la clase correspondiente (Segun su data-id).
    
    if(index === 0){
        $div_contenedor.classList.add('slider-actual');
    }
    
    // --> Agregado Data Id al Div
    $div_contenedor.dataset.id = `${index+1}`; //Agrego el valor de data-id.

    // --> Iamgen Elemento
    const $imgPeli = d.createElement('img');
    $imgPeli.src = API_IMG + `${elementoInsertar.backdrop_path}`;
    $imgPeli.alt = `${titulo}`;

    // --> Titulo
    const $tituloPeli = d.createElement('h1');
    $tituloPeli.innerText = `${titulo}`;

    // --> Descripcion
    const $descripcionPeli = d.createElement('p');
    $descripcionPeli.innerText = `${elementoInsertar.overview}`;

    // --> Inserccion dentro del Div Contenedor
    $div_contenedor.appendChild($tituloPeli);
    $div_contenedor.appendChild($imgPeli);    
    $div_contenedor.appendChild($descripcionPeli);
    
    // --> Retono el Div Con Contenido
    return $div_contenedor
}