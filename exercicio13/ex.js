
let valores = []
let contpar = 0
let valoresPares = []
let contaImpar = 0
let valoresImpar = []

for (let i = 0; i< 6;i++){
     listaDeValores =  parseInt(prompt('Informe um valor: '))
     valores[i] = listaDeValores
    if(valores[i] % 2 == 0){
        contpar++
       valoresPares.push(valores[i]) // adiciona os valores pares
    
        
    }else if (valores[i] % 2 != 0){

        contaImpar ++
        valoresImpar.push(valores[i]) // adiciona os valores ímpares

    }
        
    }

alert(`Quantidade de números pares informados:${contpar}`)
alert(`Números pares informados:${valoresPares}`)
alert(`Quantidades de numeros ímpares:${contaImpar}`)
alert(`Números Ímpares informados:${valoresImpar}`)

//codigo do professor

 //só para lista for (let numero of valores){
 //   if(numero % 2 == 0){
       // parseFloat.push(numero)
 //   } else {
 //       impare.push(numero)
  //  }
//}

//alert(`Nós temos  ${pares.length} valores pares: ${pares.join(',')}`)