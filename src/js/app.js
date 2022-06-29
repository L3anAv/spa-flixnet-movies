import { footer } from "./components/footer.js";
import { devolverHeader } from "./components/header.js";
import { SliderParaBody } from "./components/slider.js";
import { devolverBotonIrArriba } from "./components/irArriba.js";
import { contenidoParaBody } from "./components/contenidoBody.js";
import { devolverDivRegistrarse } from "./components/divRegistrarse.js"

// --> Variables Principales
const $ROOT = document.getElementById('main'); 
const donde = '/';
const $footer = footer()

// --> Funcion Principal de la SPA
export function App(){

    // --> Header con Menu De Navegacion
    $ROOT.insertAdjacentElement('beforebegin', devolverHeader())

    // --> Contenido Del Cuerpo de la SPA
    $ROOT.appendChild(SliderParaBody(donde))
    $ROOT.insertAdjacentElement('afterbegin', contenidoParaBody(donde));
    $ROOT.insertAdjacentElement('afterend', $footer)

    // --> Contenido Del Footer
    $footer.insertAdjacentElement('beforebegin', devolverDivRegistrarse())
    
    // --> Funcionalidad Para Boton de: ir al top de SPA
    devolverBotonIrArriba()

}
