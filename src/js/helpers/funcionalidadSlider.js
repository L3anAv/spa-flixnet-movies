let posSlider = 0;
let tiempo = 0;

const d = document

/* 
>> Funcion que espera que el DOOM cargue los sliders Y luego, Utilizando Promesas, 
   me retorna los sliders dentro de un array.
    --> Esta info salió de aca: https://tinyurl.com/yaxsafs3
    --> Y Utilizar un setTimeOut para esperar al DOOM lo vi un video de youtube de Jon Mircha 
*/

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

/* 
    --> CAMBIAR ESTA FUNCION: https://youtu.be/F7Mi1c3DFBs.
*/ 
export async function funcionalidadSlider(){

    // --> Seleccionando Elementos
    const arraySliders = await obtenerArray();
    const $btn_izq = document.querySelector('.fa-chevron-left');
    const $btn_der = document.querySelector('.fa-chevron-right');

    //console.log(arraySliders)

    $btn_der.addEventListener('click', () => changePosition(1,arraySliders))
    $btn_izq.addEventListener('click', () => changePosition(-1,arraySliders))

    /*
    const $btn_izq = document.querySelector('.fa-chevron-left');
    const $btn_der = document.querySelector('.fa-chevron-right');
    
    const $contenedorPelis = document.querySelector('.contenedor-peliculas')
    const arraySliders = await obtenerArray();
    
    console.log(arraySliders)

    $btn_izq.addEventListener('click', () => {
        cambiarPosSlider(-100)
        tiempo = 1
    })

    $btn_der.addEventListener('click', () => {
        cambiarPosSlider(100)
        tiempo = 1
    })

    function cambiarPosSlider(movSlider){

        posSlider += movSlider;

        if(posSlider === 0){
            $contenedorPelis.style.animation = "primera 1.5s ease-out forwards"
        }else if(posSlider === -100){
            $contenedorPelis.style.animation = "primera-hacia-tercera 1.5s ease-in forwards"
        }else if(posSlider === 100){
            $contenedorPelis.style.animation = "primera-hacia-segunda 1.5s ease-out forwards"
        } else if(posSlider === 200){
            $contenedorPelis.style.animation = "segunda-hacia-tercera 1.5s ease-out forwards"
        } else if(posSlider === 300){
            $contenedorPelis.style.animation = "tercera-hacia-primera 1.5s ease-out forwards"
            posSlider += -300
        } else if(posSlider === -200){
            $contenedorPelis.style.animation = "tercera-hacia-segunda 1.5s ease-in forwards"
        }else if(posSlider === -300){
            $contenedorPelis.style.animation = "primera 1.5s ease-out forwards"
            posSlider += 300
        }

        pasoDelTiempo()
    }
    */
    
}

/* Tengo que cambiar a grid la reputa madre */

function changePosition(ajusteSliderPos, array){

    let value
    const elementoActual = Number(d.querySelector('.slider-actual').dataset.id)
    

    value = elementoActual
    value += ajusteSliderPos

    
 /* console.log(value)
    console.log(array[value-1])
    console.log(array[elementoActual-1])
    console.log(elementoActual, ajusteSliderPos) */
    
    
 /* array[elementoActual-1].classList.toggle('slider-actual')*/
    array[value-1].classList.toggle('slider-actual')
    
}

/*
function pasoDelTiempo(){

    if(tiempo = 1){
        window.setInterval(function(){

            const $contenedorPelis = document.querySelector('.contenedor-peliculas')

            $contenedorPelis.style.animation = "cambio 30s infinite alternate"
            tiempo = 0
        }, 65000);

    }
}
*/