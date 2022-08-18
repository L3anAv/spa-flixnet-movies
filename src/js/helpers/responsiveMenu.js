
const d  =  document

/* Funcionalidad Para Menu Responsive */
export function funcionalidadMenuResponsive(){
    
    // --> Elementos del DOOM
    const $botonMenuResponsive = d.querySelector(".menu-responsive")

    // --> Funcionalidad del Boton Para Menu Responsive
    $botonMenuResponsive.addEventListener('click', manejadorMenu)
}

export function cerarMenu(){

    const ventanaSize = window.innerWidth;

    if(ventanaSize <= 1015){

        
        const $nav = d.querySelector(".nav-bar-changed")
        const $botonMenuResponsive = d.querySelector(".menu-responsive")

        $nav.classList.remove("nav-bar-changed")
        $nav.classList.add("nav-bar")
            
        $botonMenuResponsive.style.color = "#000"
        $botonMenuResponsive.style.fontSize = "28px"
        $botonMenuResponsive.classList.replace("fa-xmark", "fa-bars")

        // --> Funcionalidad del Boton Para Menu Responsive
        $botonMenuResponsive.addEventListener('click', manejadorMenu)
    }
    

}

function manejadorMenu(){

    const $nav = d.querySelector(".nav-bar") || d.querySelector(".nav-bar-changed")
    
    const navClass = $nav.className

        if(navClass === "nav-bar"){

            $nav.classList.remove("nav-bar")
            $nav.classList.add("nav-bar-changed")
             
            $botonMenuResponsive.style.fontSize = "35px"
            $botonMenuResponsive.style.color = "#cc0000"
            $botonMenuResponsive.classList.replace("fa-bars","fa-xmark")

        } else{
            
            $nav.classList.remove("nav-bar-changed")
            $nav.classList.add("nav-bar")
            

            $botonMenuResponsive.style.color = "#000"
            $botonMenuResponsive.style.fontSize = "28px"
            $botonMenuResponsive.classList.replace("fa-xmark", "fa-bars")

    }
}