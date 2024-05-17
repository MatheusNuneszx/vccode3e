const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll("aba-conteudo");
for(let i=0;i<botoes.length;i++){
    botoes[i].onclick=function(){
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos [j].ClassList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].ClassList.add("ativo");
    }
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-06-17T00:00:00");
contadores[0].textContent = "contagem regressiva";