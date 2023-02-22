let a = 3
let N = 18

function somandoMultiplos(a, N) {
    let soma = 0

    for(let i = a; i <= N; i++) {
        if (i % a === 0) {
            soma += i
        }
    }

    return soma
}

console.log(somandoMultiplos(a, N))