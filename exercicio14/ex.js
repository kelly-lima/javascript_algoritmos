
let valoresInformados = []
let totNegativos = 0
let totalDeValoresPositivos = 0
let totNumerosNegativos = 0
let totPositivos = 0
let somaPositivos = 0




for(let i = 1; i <= 10; i ++){
    valores = parseFloat(prompt(`Informe o ${i}° número: `))
    valoresInformados[i] = valores
    if(valoresInformados[i] < 0){
        totNegativos ++
    }
    if(valoresInformados[i] > 0){
        totPositivos ++
        somaPositivos += valoresInformados[i]
    }
       

    
}

alert(`Os valores informados foram: ${valoresInformados}`)
alert(` Foram informados ${totNegativos} números negativos`)
alert(`A soma de todos os números positivos é igual a : ${somaPositivos}`)