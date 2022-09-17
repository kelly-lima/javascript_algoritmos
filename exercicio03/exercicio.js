//Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.

alert("Informe o raio de uma circuferência para calcularmos a área e o perímetro")

let tamanhoDoRaio = Number(prompt("Informe o tamanho do raio: "))

pi = 314159
potencia = Math.pow(tamanhoDoRaio, 2)
let area = pi * potencia
let perimetro = 2 * pi * tamanhoDoRaio 

alert("Área: " + area)
alert("Perímetro: " + perimetro)

