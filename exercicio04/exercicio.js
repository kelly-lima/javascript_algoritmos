//Dado os três lados de um triângulo determinar o perímetro do mesmo.

alert("Informe três lados de um triânulo para determinar seu perímetro")
const lado1Triangulo = Number(prompt("Informe o primeiro lado do triângulo: "))
const lado2Triangulo = Number(prompt("Informe o segundo lado do triângulo: "))
const lado3Triangulo = Number(prompt("Informe o terceiro lado do triângulo: "))

const perimetro = lado1Triangulo + lado2Triangulo + lado3Triangulo
alert("Perímetro: " + perimetro)