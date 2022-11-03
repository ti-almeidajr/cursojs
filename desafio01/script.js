//Elementos
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

//Função verifica se é um número e se tá no intervalo aceito
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

//Função verifica se o número já está na lista
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

//Função para adicionar número na lista
function adicionar() {
    //Só adiciona se for um número e se ele já não estiver na lista
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    //Limpa e fica no campo de entrada de valores para digitar outro número
    num.value = ''
    num.focus()
}

//Funcão para finalizar 
function finalizar() {
    //Verifica se o vetor tá vazio
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        //Mostra a quantidade de valores cadastrados
        let tot = valores.length

        //Mostra o maior, o menor, a soma e a médias dos número cadastrados
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]   
            }
            if (valores[pos] < menor) {
                menor = valores[pos]   
            }
            media = soma / tot
        }

        res.innerHTML = ''

        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`

        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores tempos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`

    }
}