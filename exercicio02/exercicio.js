// Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.

const lado = Number(prompt("Informe o lado do quadrado: "))
const area = Math.pow(lado, 2)
const perimetro = lado * 4
alert("Área: " + area)
alert("Perimetro: " + perimetro)