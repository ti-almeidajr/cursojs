let valores = [8, 1, 7, 4, 2, 9] // Cria vetor

/*FORMA 01: Mostra todos os elementos do vetor de uma vez
console.log(valores)

FORMA 02: Mostrar todos elementos do vetor linha por linha
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

FORMA 03: Mostrar todos elementos do vetor utilizando laço de repetição
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);    
}
*/

// FORMA 04 - Mostrar todos elementos do vetor utilizando laço de repetição(Simplificada)
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);   
}
