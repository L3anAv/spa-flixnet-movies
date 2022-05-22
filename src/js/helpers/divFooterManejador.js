export function manejadorDivRegistrarse(path){

    const $divRegistrarse = document.getElementById('registrarse-antes-footer');

    const contiene = $divRegistrarse.classList.contains('ocultar')
   
    if(!contiene && path === '/login'){
        $divRegistrarse.classList.add('ocultar')
    } else{
        $divRegistrarse.classList.remove('ocultar')
    }

}