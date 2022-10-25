let num = [5, 8, 2, 9, 3]

num.push(1) // Acrescenta no fim do vetor o valor 1
num.sort() // Coloca em ordem crescente os elementos do vetor
console.log(num) // Mostra o vetor
console.log(`Nosso vetor tem ${num.length} posições`) // Informa a quantidade de posições do vetor
console.log(`O primeiro valor do vetor é ${num[0]}`) // Informa o elemento da posição 0 do vetor


let pos = num.indexOf(9) // Variável criada para receber o resultado da busca
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}
 