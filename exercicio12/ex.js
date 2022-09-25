

        let contador = 0
        let soma = 0
        let escolhaDoUsuario = parseInt(prompt('Quantos números deseja calcular: '))
        while (contador < escolhaDoUsuario) {
            let valores = parseInt(prompt('Digite um número'))
            contador++
            soma = soma + valores
  
            //let media = soma / escolhaDoUsuario
        //document.write(media)
        }
        let total =   soma / escolhaDoUsuario
        alert('total: ' + total)

        
        