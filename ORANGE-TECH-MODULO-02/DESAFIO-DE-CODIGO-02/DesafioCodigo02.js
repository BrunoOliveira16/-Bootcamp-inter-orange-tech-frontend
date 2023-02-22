let resultado = 4

const fizzBuzz = (resultado)=> {
    if ( resultado % 3 === 0 && resultado % 5 === 0) {
        return `FizzBuzz`
    } else if (resultado % 3 === 0) {
        return `Fizz`
    } else if (resultado % 5 === 0) {
        return `Buzz`
    } else {
        return resultado
    }
}

console.log(fizzBuzz(resultado))