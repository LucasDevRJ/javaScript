let amigo = {
    nome: "José",
    sexo: "M",
    peso: 85.4,
    engordar(p = 0) {
        console.log("Engordou");
        this.peso += p;
    }
}
console.log(amigo);
console.log("Nome: " + amigo.nome);
console.log("Peso: " + amigo.peso);
amigo.engordar(2);
console.log("Peso: " + amigo.peso);