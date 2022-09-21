
let tipoDeCombustivel = prompt(`
Escolha uma das opções:
 A-Álcool
 G-Gasolina
`)



let litros = parseFloat(prompt(`Informe quantos litros deseja: `))
let valorDoalcool = 1.90 * litros
let valorDaGasolina = 2.70 * litros


if (tipoDeCombustivel == 'A'){
    if(litros <= 25){
        let desconto = (valorDoalcool * 2) / 100
        let total = valorDoalcool - desconto  
        alert(`Total do pagamento R$ ${total}`)  
    }else{
        let desconto = (valorDoalcool * 4) / 100
        let total = valorDoalcool - desconto
        alert(`Total do pagamento R$ ${total}`)
    }
   

}else if(tipoDeCombustivel == 'G'){
    if(litros <= 25){
        let desconto = (valorDaGasolina * 3) / 100
        let total = valorDaGasolina - desconto
        alert(`Total do pagamento R$ ${total}`)
    }else{
        let desconto = (valorDaGasolina * 5) / 100
        let total = valorDaGasolina - desconto
        alert(`Total do pagamento R$ ${total}`)
    }
}


