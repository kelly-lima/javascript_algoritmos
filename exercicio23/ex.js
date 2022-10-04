//Sabendo que latão é constituído de 70% de cobre e 30% de zinco, indique a quantidade de
//cada um desses componentes para se obter uma certa quantidade de latão (requerida pelo
//usuário).



let quantidadeDeLatao = parseFloat(prompt('Informe a quantidade de latão que deseja: '))
let cobre = quantidadeDeLatao * 0.7
let zinco = quantidadeDeLatao * 0.3

alert(`Para ${quantidadeDeLatao} de latas será necessario
${cobre.toFixed(2)} de cobre e ${zinco.toFixed(2)}de zinco`)
