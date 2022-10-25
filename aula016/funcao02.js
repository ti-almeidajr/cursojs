function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}

/*
let resp = soma(3, 2)
console.log(resp)
*/

// Caso passe somente um valor por parâmetro, é bom que se inicialize os valores com 0, assim deixa de dar erro caso passe apenas um parâmetro (NaN)

console.log(soma(3))