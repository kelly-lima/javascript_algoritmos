
let pesoDoUsuario = parseFloat(prompt("Informe seu peso: "))
let alturaDoUsuario = parseFloat(prompt("Informe sua altura: "))

let imc = pesoDoUsuario / (Math.pow(alturaDoUsuario,2))
alert('Seu IMC É: ' + imc.toFixed(2))

if (imc < 18.5){
    alert("Usuário esta abaixo do peso")
}
else if (imc >= 18.5 && imc < 25){
    alert("Usuário com peso normal")   
}
else if (imc >= 25 && imc <= 30){
    alert("Usuário está acima do peso")
}

else{
    alert("Usuário está com obesidade")
}
