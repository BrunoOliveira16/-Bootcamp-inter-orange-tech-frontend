let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]
let valor = 4

const buscaSequencial = (valor) => {
    for(let i = 0; i < elementos.length; i++) {
        const elemento = elementos

        if(elemento[i] === valor) {
            return `Achei ${valor} na posicao ${[i]}`
        } 
    }
    return `Numero ${valor} nao encontrado!`
}

console.log(buscaSequencial(valor))
