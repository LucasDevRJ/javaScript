function parOuImpar(n) {
    if (n % 2 == 0) {
        return "Par!";
    } else {
        return "Ímpar!";
    }
}

var eParOuImpar = parOuImpar(4);
console.log(eParOuImpar);