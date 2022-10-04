// bixestos

const ano = parseInt(prompt("Digite um ano: "))
if(ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 0){
    document.write("O ano é bissexto")

}
else if(ano % 4 == 0 && ano % 100 !=0){
    document.write("O ano é Bissexto")
  
}else{
    document.write("O ano não é bissexto")
}

