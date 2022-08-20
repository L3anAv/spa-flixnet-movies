import helpers from "../helpers/helpers.js";
import { loader } from "../components/loader.js"
import { devolverContenidoDe } from "../components/contenidoBody.js"

const d = document

export function manejadorGenerosSolicitadoPorMenu(){
    
    const $nav = d.querySelector(".nav-generos")
    const rutaEnApiSinGenero = helpers.API_MOVIE_SIN_GENERO;
    
    $nav.addEventListener('click', (e) => {
        
        e.preventDefault();
        let API_MOVIE_CON_GENERO = '';
        colocarStyloSiEsBotonActivo(e)
        const valorMenu = e.target.childNodes[0].textContent;
        
        if(valorMenu == "" || valorMenu == "Accion"){

            API_MOVIE_CON_GENERO = rutaEnApiSinGenero + "28";
            insertarContenidoEnBodyContenido(API_MOVIE_CON_GENERO)
        
        }else if(valorMenu == "Drama"){
            
            API_MOVIE_CON_GENERO = rutaEnApiSinGenero + "18";
            insertarContenidoEnBodyContenido(API_MOVIE_CON_GENERO)
          

        }else if(valorMenu == "Animacion"){
            
            API_MOVIE_CON_GENERO = rutaEnApiSinGenero + "16";
            insertarContenidoEnBodyContenido(API_MOVIE_CON_GENERO)
           

        } else if(valorMenu == "Aventura"){
            
            API_MOVIE_CON_GENERO = rutaEnApiSinGenero + "12";
            insertarContenidoEnBodyContenido(API_MOVIE_CON_GENERO)
            

        }else if(valorMenu == "Comedia"){
            
            API_MOVIE_CON_GENERO = rutaEnApiSinGenero + "35";
            insertarContenidoEnBodyContenido(API_MOVIE_CON_GENERO)

        }   
    })

    $nav.addEventListener('click', (e) => {

        console.log(e.target.innerHTML)
        const contenido = e.target.innerHTML

        switch(contenido){
            case "Accion":
                $nav.scrollTo(20,0)
                break;
            case "Drama":
                $nav.scrollTo(30,0)
                break;
            case "Aventura":
                $nav.scrollTo(250,0)
                break;
            case "Comedia":
                $nav.scrollTo(330,0)
                break;
            case "Animacion":
                $nav.scrollTo($nav.scrollWidth,0)
                break;
            case "&gt;":
                $nav.scrollTo(0,0)
                break;
            case "&lt;":
                $nav.scrollTo($nav.scrollWidth,0)
                break; 
        }
    })
}

function insertarContenidoEnBodyContenido(rutaDeExtraccion){

    const $dondeInsetarContenido = d.querySelector('.contenedor-principal')
    const $hijo = $dondeInsetarContenido.firstChild
    const $loader = loader()
    $dondeInsetarContenido.replaceChild($loader, $hijo)

    // -- Simulando demora -- //
    setTimeout(() => {

        const $contenidoNuevo = devolverContenidoDe(rutaDeExtraccion, "movies")
        $dondeInsetarContenido.replaceChild($contenidoNuevo, $loader)

    }, 1000);
    
}

function colocarStyloSiEsBotonActivo(e){

    const targetEl = e.target
    const $nav = d.querySelector(".nav-generos")

    const $navElements = $nav.childNodes[0].childNodes
    
    for(let i = 0; i < $navElements.length; i++){
        
        let $a = $navElements[i].childNodes[0]

        if($a === targetEl){
            $a.classList.add('nav-boton-por-genero-activo')
        } else{
            $a.classList.remove('nav-boton-por-genero-activo')

        }
    }

}