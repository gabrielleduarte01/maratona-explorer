// Analisar: Quais são minhas variáveis?
// Quais meus dados de entrada?
// Quais meus dados de saída?
const resposta = document.querySelector('#res')
const inputPergunta = document.querySelector('#inputPergunta')
const buttonPerguntar = document.querySelector('#buttonPerg')
const respostas = [
"Certeza!",
"Não tenho tanta certeza.",
"É decididamente assim.",
"Não conte com isso.",
"Sem dúvidas!",
"Pergunte novamente mais tarde.",
"Sim, definitivamente!",
"Minha resposta é não.",
"Você pode contar com isso.",
"Melhor não te dizer agora.",
"A meu ver, sim.",
"Minhas fontes dizem não.",
"Provavelmente.",
"Não é possível prever agora.",
"Perspectiva boa.",
"As perspectivas não são tão boas.",
"Sim.",
"Concentre-se e pergunte novamente.",
"Sinais apontam que sim.", 
] // array

//Clicar em fazer pergunta
function fazerPergunta() { // usar onclick no html para linkar com a função 
if(inputPergunta.value == "") { // se o valor da caixa de pergunta for vazio 
    alert('Digite sua pergunta para continuar')
    return //para o codigo
}

buttonPerguntar.setAttribute('disabled', true) // para disabilitar o botao depois que fizer a pergunta 

const pergunta = "<div>" + inputPergunta.value + "</div>"
// gerar numero aleatorio 
const totalRespostas = respostas.length // para contar o tanto de respostas possiveis 
const numAleatorio = Math.floor(Math.random() * totalRespostas) // math floor - arredondamento ao piso  Math randow - gera numero aleatorio de 0 ate < q 1 e multiplica pelo total de respostas
resposta.innerHTML = pergunta + respostas[numAleatorio]
resposta.style.opacity = 1;
// pra resposta sumir depois de um tempo 3seg
setTimeout (function() {
    resposta.style.opacity = 0;
    buttonPerguntar.removeAttribute('disabled')
}, 3000)
}