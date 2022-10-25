function fatorial(num) {
    let fat = 1 // Inicializando a váriavel com valor 1
    for (let c = num; c > 1; c--) {
        fat *= c;
    }
    return fat
}

console.log(fatorial(5))