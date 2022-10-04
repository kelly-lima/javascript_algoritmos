//Escreva um algoritmo que leia um valor inicial A e imprima o seu fatorial

let valorDoUsuario = parseInt(prompt('Informe um valor: '))


function fatorial(valor){
       let fat = 1
       for(let i = valor; i >= 1; i--){
              fat *= i
       }
         return fat     
}   



alert(fatorial(valorDoUsuario))





