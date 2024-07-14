var valores = [8, 1, 7, 4, 2, 9];

/*
for (let i = 0; i < valores.length; i++) {
    console.log(`A posição ${i} tem o valor de ${valores[i]}`);
}
*/

for (let valor in valores) {
    console.log(valor);
}

console.log(`Posição do índice com valor 7: ${valores.indexOf(7)}`); //devolve o índice do valor, se encontrado

var posicaoDesejada = valores.indexOf(3);

if (posicaoDesejada !== -1) {
    console.log(`O valor ${valores[posicaoDesejada]} encontrado com sucesso!`);
} else {
    console.log("O valor digitado não foi encontrado :(");
}