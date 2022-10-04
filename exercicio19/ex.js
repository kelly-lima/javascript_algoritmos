//Crie um código que receba 3 valores do comprimento de um triângulo e depois mostre um alert informando 
//se o triângulo é equilátero, isóceles ou escaleno.

let primeiroValor = prompt('Informe o promeiro valor: ')
let segundoValor =  prompt('Informe o segundo valor: ')
let terceiroValor = prompt('Informe o terceiro valor: ')


function tipoDeTriangulo(ladoA, ladoB, ladoC){
    if(ladoA == ladoB && ladoB == ladoC)
        alert('Triangulo equilátero')
    else if(ladoA != ladoB && ladoC != ladoA){
        alert('triangulo escaleno')
    }else{
        alert('Triangulo isoceles')
    }
    

}

tipoDeTriangulo(primeiroValor, segundoValor, terceiroValor)