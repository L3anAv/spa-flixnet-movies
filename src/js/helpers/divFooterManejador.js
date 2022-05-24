
export function manejadorDivRegistrarse(path){

    // --> Obteniendo Elemento
    const $divRegistrarse = document.getElementById('registrarse-antes-footer');

    // --> Variables de control
    const contiene = $divRegistrarse.classList.contains('ocultar')
    const noMostarEnruta = path == "/login" || path === "/registro"
    
    // --> Condicional
    if(!contiene && noMostarEnruta){
        $divRegistrarse.classList.add('ocultar')
    } else if(contiene && !noMostarEnruta){
        $divRegistrarse.classList.remove('ocultar')
    }

}