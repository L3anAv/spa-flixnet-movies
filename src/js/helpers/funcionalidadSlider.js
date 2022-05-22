let posSlider = 0;
let tiempo = 0;


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
    
    
}

function pasoDelTiempo(){

    if(tiempo = 1){
        window.setInterval(function(){

            const $contenedorPelis = document.querySelector('.contenedor-peliculas')

            $contenedorPelis.style.animation = "cambio 30s infinite alternate"
            tiempo = 0
        }, 65000);

    }
}
