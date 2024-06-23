var resultadoContador = document.getElementById("resultadoContador");
var mensagem = document.getElementById("mensagem");

function contarPassos() {
    limpaContagem();

    //Armazenando o valor digitado
    let valorInicio = document.getElementById("valorInicio").value;
    let valorFim = document.getElementById("valorFim").value;
    let valorPasso = document.getElementById("valorPasso").value;

    //Convertendo valores para números
    valorInicio = parseInt(valorInicio); 
    valorFim = parseInt(valorFim); 
    valorPasso = parseInt(valorPasso); 

    if (isNaN(valorInicio) || valorInicio < 0 || isNaN(valorFim)) {
        mensagem.innerHTML = "Impossível contar!";
    } else {
        if (valorPasso == 0) {
            alert("Passo inválido! Considerando PASSO 1");
            valorPasso = 1;
        }
        if (valorInicio <= valorFim) {
            while (valorInicio <= valorFim) {
                resultadoContador.innerHTML += valorInicio + "&#x1F449;";
                if (valorInicio >= valorFim) {
                    resultadoContador.innerHTML += "&#x1F3C1;";
                }
                valorInicio += valorPasso;
            }
        } else {
            while (valorInicio >= valorFim) {
                resultadoContador.innerHTML += valorInicio + "&#x1F449;";
                if (valorInicio <= valorFim) {
                    resultadoContador.innerHTML += "&#x1F3C1;";
                }
                valorInicio -= valorPasso;
            }
        }
        
        mensagem.innerHTML = "Contando...";
    }
}

function limpaContagem() {
    resultadoContador.innerHTML = "";
}

let botaoContar = document.getElementById("botaoContar");
botaoContar.addEventListener("click", contarPassos);