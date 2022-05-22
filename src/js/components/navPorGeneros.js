
const d = document

/* Funcion que devuelve el Nav Por Generos */
export function devolverNavSectionContenido(){

    // --> Crear Nav
    const $nav = d.createElement('nav')

    // --> Agregando clase Correpondiente
    $nav.classList.add('nav-generos')

    // --> Devolver Ul Relleno
    const $ul = devolverUl()

    // --> Insertar Ul
    $nav.appendChild($ul)

    return $nav
}

function devolverUl(){

    // --> Crear Elemento Ul
    const $ul = d.createElement('ul')

    // --> Valor de Item li dentro de Ul
    const Items = ["Accion","Drama", "Aventura", "Comedia", "Animacion"]
    
    // --> Crear cada li para Ul
    Items.forEach((elemento, index) => {
        
        // --> Crear y deolver li relleno
        const li = crearLi(elemento, index)
        
        // --> Inserta li en Ul
        $ul.appendChild(li)
    })

    // --> Retonar Ul
    return $ul
}

function crearLi(elemento, index){
    
    // --> Creando Elementos Necesarios
    const $a = d.createElement('a')
    const $li = d.createElement('li')

    // --> Agregando Clases 
    $a.classList.add("nav-boton-por-genero")

    // --> Agregando Clases Especial a el primer elemento a
    if(index === 0){
        $a.classList.add("nav-boton-por-genero-activo")
    }
    // --> Insertando datos Correspondientes
    $a.innerText = `${elemento}`

    // --> Insertando a en li
    $li.appendChild($a)

    // --> Devolviendo li
    return $li
}