
const velocidadeMaxima = parseInt(prompt('Informe a velocidade máxima permitida: '))
const velocidadeDoCarro = parseInt(prompt('Informe a velocidade do carro: '))

let velocidade = velocidadeDoCarro - velocidadeMaxima

if (velocidadeDoCarro > velocidadeMaxima && velocidade <= 10) {
        alert(`Você ultrapassou a velocidade máxima de ${velocidadeMaxima}Km/h
    Multa aplicada: R$50`)
    }

    else if (velocidade >= 11 && velocidade <= 30) {
        alert(`Você ultrapassou a velocidade máxima de ${velocidadeMaxima}Km/h
    Multa aplicada: R$100,00`)
    } else {
        alert(`Você ultrapassou a velocidade máxima de ${velocidadeMaxima}Km/h
    Multa aplicada: R$200,00`)
    }






