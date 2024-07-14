let num = [5, 8, 2, 9, 3];
console.log(`Nosso vetor é o ${num}`);
console.log(`Nosso vetor tem ${num.length} posições`);
console.log(`O primeiro valor do nosso vetor é ${num[0]}`);

num.sort(); //embaralha o vetor
console.log(`Nosso vetor é o ${num}`);

num.push(1); //adiciona valor no final
console.log(`Nosso vetor é o ${num}`);