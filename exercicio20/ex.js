//Sabendo que latão é constituído de 70% de cobre e 30% de zinco, indique a quantidade de
//cada um desses componentes para se obter uma certa quantidade de latão (requerida pelo
  //  usuário).

  // latão tem 70 % de cobre 
  let quantidadeDeLatao = prompt('Informe a quantiadde de latão: ')

  function porcentagemDeProdutos(valor){
        let cobre = valor / 100 * 70
        let zinco = valor / 100 * 30
        return[cobre,zinco]
  }

alert(porcentagemDeProdutos(quantidadeDeLatao))


  //quantidadeDeLatao - 70 %
 // quantidadeDeLatao - 30 % 

  //quantidadeDeLatao / 100 * 70
  //quantidadeDeLatao / 10 * 30

