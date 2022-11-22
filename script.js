let menuMobile = document.querySelector('.menuMobile')
let botaoMenu = document.querySelector('.botaoMenu')

let aberto = false // flag - variável de controle - estado de determinada aplicação

function abrirOuFecharMenu(){

    if(aberto === true){
        aberto = false
        menuMobile.classList.remove('aberto')
        botaoMenu.innerHTML = 'Abrir Menu'
    }else if (aberto === false){
        aberto = true
        menuMobile.classList.add('aberto')
        botaoMenu.innerHTML= '<b>Fechar Menu</b>'
    }
}
