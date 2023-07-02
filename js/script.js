// const braco = document.querySelector('#braco');
// const somar = document.querySelector('#somar');
// const subtrair = document.querySelector('#subtrair');

// const contador = document.querySelectorAll('.controle-contador ');

// console.log(controle);

// const controle = document.querySelectorAll('.controle-ajuste');
const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "braco": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleo": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43
    },
    "foquetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.peca)
    })
})

// somar.addEventListener("click", (evento) => {
//     manipulaDados(somar)
// })

// subtrair.addEventListener("click", (evento) => {
//     manipulaDados(subtrair)
// })


/* Desafio 3
No desafio desta aula, temos uma lista de cores que serão utilizadas para pintar uma loja, 
porém o cliente informou que não deseja mais pintar com a cor "vermelha". Retire esta cor 
da lista utilizando um método do JavaScript. Utilize a lista abaixo como base:
*/
// var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; 

// console.log(lista);

// lista.splice(1, 1)

// console.log(lista);


function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]');

    if (operacao === "+") {
        peca.value = parseInt(peca.value) + 1;
    } else {
        peca.value = parseInt(peca.value) - 1;
    }
}

function atualizaEstatistica(peca) {
    estatistica.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}
function trocaImagem(cor) {
    document.querySelector(".robo").src = "img/Robotron 2000 - " + cor + ".png";
}