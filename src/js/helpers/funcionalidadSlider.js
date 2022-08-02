const d = document
 
// >> Funcion que espera que el DOOM cargue los slides Y luego, 
//Utilizando Promesas, me retorna todos en un array.

function obtenerArray(){

    // --> Promesa que me devuelve un array con los elementos del Slider
    const promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            const arraySlider = [...document.querySelectorAll('.pelicula--show')]
            resolve(arraySlider)
        }, 1000);
    })

    // --> Retorno arr con Elementos del Slider
    return promise
}

// >> Funcion que se encarga del funcionamiento de los botones del slider

export async function funcionalidadSlider(){

    const arraySliders = await obtenerArray();
    const array = arraySliders
    
    // --> Seleccionando Elementos
    const $btn_izq = document.querySelector('.fa-chevron-left');
    const $btn_der = document.querySelector('.fa-chevron-right');

    $btn_der.addEventListener('click', () => changePosition(1,array))
    $btn_izq.addEventListener('click', () => changePosition(-1,array))
    
}

async function changePosition(ajusteSliderPos,array){

    let value
    
    const elementoActual = Number(d.querySelector('.slider-actual').dataset.id)
    const cantidadSliders = d.querySelector('.contenedor-peliculas').childElementCount

    value = elementoActual
    value += ajusteSliderPos

    if(value === 0 || value === cantidadSliders+1){
        value = value === 0 ? cantidadSliders : 1;
    }
    
    array[value-1].classList.toggle('slider-actual')
    array[elementoActual-1].classList.toggle('slider-actual')
    
}