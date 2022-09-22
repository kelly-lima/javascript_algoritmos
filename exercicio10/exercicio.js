let sexo = prompt(`Informe seu sexo:
M - Para masculino
F - Para feminino`)

let sexoDoUsuario = sexo.toLocaleLowerCase

let alturaDoUsuario = parseFloat(prompt('Informe sua altura: '))

if (sexoDoUsuario == 'M'){
    let peso = (72.7 * alturaDoUsuario) - 58
    alert(`Seu peso ideal é : ${peso.toFixed(2)} Kg`)
}
else{
    let peso = (62.1 * alturaDoUsuario) - 44.7
    alert(`Seu peso ideal é : ${peso.toFixed(2)} Kg`)
}