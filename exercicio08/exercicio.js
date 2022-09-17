// Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo, dado
//seu raio e sua altura.

alert("Calculando o volume de uma lata de Óleo")
let raio = Number(prompt("Informe o raio: "))
let altura = Number(prompt("Infome a altura: "))


let potencia = Math.pow(raio, 2)
let volume = 3.14159 * (potencia) * altura

alert("Volume: " + volume)



