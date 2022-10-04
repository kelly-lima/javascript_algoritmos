//Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
//mostrar :
//    a. A menor altura do grupo;
//    b. A maior altura do grupo;



let alturaDoUsuario = []

for (let i = 1; i < 5; i++){
     numeros = parseFloat(prompt(`Informe  da ${i}° altura: `))
    alturaDoUsuario.push(numeros)
}
   
alert(alturaDoUsuario)

