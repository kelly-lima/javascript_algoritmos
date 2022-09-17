//Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.
alert("Informe dois valores para exibir o quociente e o resto da divisão")

let primeiroValor = Number(prompt("Informe o primeiro valor: "))
let segundoValor = Number(prompt("Informe o segundo valor: "))

let quociente = primeiroValor / segundoValor
let restoDaDivisao = primeiroValor % segundoValor
alert("O quociente da divisão entre " + primeiroValor + " e " + segundoValor +
" é: " + quociente + " e o resto da divisão é: " + restoDaDivisao)
