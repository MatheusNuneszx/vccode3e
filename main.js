const botoes = document.querySelectorA11(".botao");
for(let i=0;i<botoes.length;i++){
    botoes[i].onclick=function(){
        botoes[i].classList.add("ativo");
    }
}