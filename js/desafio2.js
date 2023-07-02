/*
criar uma função anônima que retorne a frase “Fui clicado”. Esta função será aplicada em conjunto de um evento de clique.
*/

const calcular = document.querySelector("#calcular");
const resultado = document.querySelector('.resultado')


calcular.addEventListener("click", (evento) => {
    resultado.innerHTML = "Fui clicado"
})