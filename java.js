const menu = document.querySelector(".menu-lateral")
const botao = document.querySelector(".botaomenu")
 const fecharX = document.querySelector(".iconeX")   

function botaoomenu(){
    menu.style.display ="block"
    botao.style.display ="none"
    

}
function fecharmenu(){
    console.log('oiii')
    menu.style.display = "none"
    botao.style.display= "block"
}



     








fecharX.addEventListener('click', fecharmenu)
botao.addEventListener('click' ,botaoomenu)