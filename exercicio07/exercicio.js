//Dado que a fórmula para conversão de Fahrenheit para Celsius é C = 5/9 (F – 32), ler um
//valor de temperatura em Fahrenheit e exibi-lo em Celsius

alert("Informe uma tempetura em Fahrenheit para convertermos em Celsius ")
let valorEmFahrenheit = Number(prompt("Informe a temperatura em (Fahrenheit) °F: "))

let valorEmCelsius = 5*(valorEmFahrenheit - 32) / 9
alert("A temperatura em Celsius é: " + valorEmCelsius + "°C")
