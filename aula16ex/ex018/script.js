var select = document.querySelector("select");
var botaoAdicionar = document.getElementById("botaoAdicionar");
var botaoFinalizar = document.getElementById("botaoFinalizar");
var estatisticas = document.getElementById("estatisticas");

var numeros = [];

var estatisticasForamExibidas = false;

let p = document.createElement("p");

botaoAdicionar.onclick =  function adicionarNumero() {
    if (estatisticasForamExibidas) {
        let paragrafos = document.getElementsByClassName("paragrafoEstatistico");
        for (let i = 4; i <= paragrafos.length; i--) {
            estatisticas.removeChild(paragrafos[i]);
        }
    }
    let campoNumero = document.getElementById("numero");
    let numeroDigitado = campoNumero.value;
    let valorJaFoiAdicionadoOuValorInvalido = false;

    if (numeroDigitado < 1 || numeroDigitado > 100) {
        alert("Valor inválido ou já encontrado na lista.");
        valorJaFoiAdicionadoOuValorInvalido = true;
    }

    for (let i = 0; i < numeros.length; i++) {
        if (numeroDigitado == numeros[i]) {
            alert("Valor inválido ou já encontrado na lista.");
            valorJaFoiAdicionadoOuValorInvalido = true;
        } 
    }

    if (!valorJaFoiAdicionadoOuValorInvalido) {
        let option = document.createElement("option");
        numeroDigitado = parseInt(numeroDigitado);
        var numeroAdicionado = document.createTextNode(`Valor ${numeroDigitado} adicionado.`);
        option.appendChild(numeroAdicionado);    
        select.appendChild(option);
        numeros.push(numeroDigitado);
        campoNumero.value = "";
        //console.log(numeros);
    }
}

botaoFinalizar.onclick = function exibeEstatisticas() {
    if (numeros.length == 0) {
        alert("Adicione valores antes de finalizar!");
    } else {
        let maiorValorInformado = numeros[0];
        let menorValorInformado = numeros[0];
        let somaValores = 0;
        let media = 0;
        let quantidadeTotalDeNumeros = numeros.length;
    
        for (let i = 0; i < quantidadeTotalDeNumeros; i++) {
            if (numeros[i] > maiorValorInformado) {
                maiorValorInformado = numeros[i];
            }
    
            if (numeros[i] < menorValorInformado) {
                menorValorInformado = numeros[i];
            }
    
            somaValores += numeros[i];
        }
    
        media = somaValores / quantidadeTotalDeNumeros;
    
        criaParagrafoEMensagem(`Ao todo, temos ${quantidadeTotalDeNumeros} números cadastrados.`);
        criaParagrafoEMensagem(`O maior valor informado foi ${maiorValorInformado}.`);
        criaParagrafoEMensagem(`O menor valor informado foi ${menorValorInformado}.`);
        criaParagrafoEMensagem(`Somando todos os valores, temos ${somaValores}.`);
        criaParagrafoEMensagem(`A média dos valores digitados é ${media}.`);
        estatisticasForamExibidas = true;
    }
}

function criaParagrafoEMensagem(conteudo) {
    p = document.createElement("p");
    p.className = 'paragrafoEstatistico';
    let mensagem = document.createTextNode(conteudo);
    p.appendChild(mensagem);
    estatisticas.appendChild(p);
}