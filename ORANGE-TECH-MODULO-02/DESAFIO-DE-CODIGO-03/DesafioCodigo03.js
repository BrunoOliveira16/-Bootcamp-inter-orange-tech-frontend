let n = 15

function somatorio(n) {
    let soma = 0

    for(let i = n; i >= 0; i--) {
        soma +=i
    }
    return soma
}

console.log(somatorio(n))