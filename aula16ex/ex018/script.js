var select = document.querySelector("select");
var botaoAdicionar = document.getElementById("botaoAdicionar");

var numeros = [];

botaoAdicionar.onclick =  function adicionarNumero() {
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
        console.log(numeros);
    }
}