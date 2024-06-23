var select = document.querySelector("select");
var botao = document.getElementById("botaoTabuada");
var option = document.createElement("option");
var mensagem = document.createTextNode("Digite um número acima");
option.appendChild(mensagem);
select.appendChild(option);

botao.onclick =  function calcularTabuada() {
    let numeroDigitado = document.getElementById("numero").value;
    numeroDigitado = parseInt(numeroDigitado);
    let conta;
    if (isNaN(numeroDigitado)) { 
        alert("Por favor, digite um número!");
    } else {
        select.removeChild(option);
        for (let i = 1; i <= 10; i++) {
            option = document.createElement("option");
            conta = numeroDigitado * i;
            //tabuada.innerHTML += `${numeroDigitado} x ${i} = ${conta}`;
            var optionValor = document.createTextNode(`${numeroDigitado} x ${i} = ${conta}`);
            option.appendChild(optionValor);
            select.appendChild(option);
        }
    }
}