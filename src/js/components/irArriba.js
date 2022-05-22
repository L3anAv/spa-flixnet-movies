const d = document
const $ROOT = document.getElementById('main'); 

export function devolverBotonIrArriba(){

    const $div = d.createElement('div')
    $div.classList.add("btn-arriba")
    $div.innerText = '↑'

    window.addEventListener('scroll', () =>{

        if(window.scrollY >= 715.8333129882812){

            $div.classList.remove('ocultar')
            $ROOT.appendChild($div)

        }else if(window.scrollY <= 500){
            $div.classList.add('ocultar')   
        }

    })

    $div.addEventListener('click', () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    })
    
}