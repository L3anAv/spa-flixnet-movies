import { SliderParaBody } from "../components/slider.js";
import { formParaLogin } from "../components/formLogin.js";
import { contenidoParaBody } from "../components/contenidoBody.js";
import { funcionalidadSlider } from "../helpers/funcionalidadSlider.js";
import { funcionalidadMenuResponsive } from "../helpers/responsiveMenu.js";
import { darFormularioRegistro } from "../components/crearFormRegistro.js";
import { manejadorDivRegistrarse } from "../helpers/divFooterManejador.js";
import { manejadorGenerosSolicitadoPorMenu } from "../helpers/manejadorDeContenidoPorGenero.js";

export function Router(){

/* Selector del main */
const $ROOT = document.getElementById('main');

/* Para manejadores de eventos */
const login = document.querySelector('#login')
const proxima = document.querySelector('#estrenos')
const inicio = document.querySelector('#Peliculas')
const tvSeries = document.querySelector('#tv-series')
const registro = document.querySelectorAll('#registro')

/* Eventos para menu */
inicio.addEventListener('click', (e) =>{
    colocarRuta(e)
})

tvSeries.addEventListener('click', (e) =>{
    colocarRuta(e)
})

proxima.addEventListener('click', (e) =>{
    colocarRuta(e)
})

registro[0].addEventListener('click', (e) => {
    colocarRuta(e)
})

registro[1].addEventListener('click', (e) => {
    colocarRuta(e)
    
})

login.addEventListener('click', (e) => {
    colocarRuta(e)
})


/* Colocar Ruta En la URL */
const colocarRuta = (e) => {
    
    // --> Tomo la ruta
    e.preventDefault();
    e = e || window.event;

    // --> La coloco en el historial
    window.history.pushState({}, "", e.target.href);
    
    // --> Llamo al manejador de contenidos.
    manejadorContenidos()

}

/* Contenido segun ruta en la URL */
function manejadorContenidos(){

    // --> Location: donde estoy ubicado en mi SPA
    const path = window.location.pathname,  
          movies = 'movies',
          tvseries = 'TVseries',
          estrenos = 'estrenos';     
            

    // --> Vacio el main antes de insertar nuevo contenido
    $ROOT.innerText = ''

    // --> Contenido segun Path
    if(path === "/" || path === ""){

            
        $ROOT.appendChild(SliderParaBody(movies));
        $ROOT.appendChild(contenidoParaBody(movies));
        
        // --> Funcionalidades
        funcionalidadSlider()
        manejadorDivRegistrarse(path)
        manejadorGenerosSolicitadoPorMenu()
        funcionalidadMenuResponsive()
            
    } else if(path === "/tv-series"){
            
        $ROOT.appendChild(SliderParaBody(tvseries));
        $ROOT.appendChild(contenidoParaBody(tvseries));

        // --> Funcionalidades
        funcionalidadSlider()
        manejadorDivRegistrarse(path)
        funcionalidadMenuResponsive()
            
    } else if(path === "/estrenos"){
            
        $ROOT.appendChild(SliderParaBody(estrenos))

        // --> Funcionalidades
        funcionalidadSlider()
        manejadorDivRegistrarse(path)
        funcionalidadMenuResponsive()
            

    } else if(path === "/registro"){
        
        $ROOT.appendChild(darFormularioRegistro())

        // --> Funcionalidades
        manejadorDivRegistrarse(path)
        funcionalidadMenuResponsive()
            
    }else if(path === "/login"){
            
        $ROOT.appendChild(formParaLogin())

        // --> Funcionalidades
        manejadorDivRegistrarse(path)
        funcionalidadMenuResponsive()

    }
        
}


/* Manejadores de eventos adicionales */
window.onpopstate = manejadorContenidos;
window.route = colocarRuta;
manejadorContenidos();

}

