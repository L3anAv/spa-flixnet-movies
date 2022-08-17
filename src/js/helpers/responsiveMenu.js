
const d  =  document

/* Funcionalidad Para Menu Responsive */
export function funcionalidadMenuResponsive(){
    
    // --> Elementos del DOOM
    const $botonMenuResponsive = d.querySelector(".menu-responsive")
    const $nav = d.querySelector(".nav-bar")

    // --> Funcionalidad del Boton Para Menu Responsive
    $botonMenuResponsive.addEventListener('click', () => {    

        const navClass = $nav.className
        console.log(navClass)

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

    })
}

export function cerarMenu(){

    const $botonMenuResponsive = d.querySelector(".menu-responsive")
    const $nav = d.querySelector(".nav-bar-changed")

    $nav.classList.remove("nav-bar-changed")
    $nav.classList.add("nav-bar")
            
    $botonMenuResponsive.style.color = "#000"
    $botonMenuResponsive.style.fontSize = "28px"
    $botonMenuResponsive.classList.replace("fa-xmark", "fa-bars")

}
