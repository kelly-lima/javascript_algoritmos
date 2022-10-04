//Escreva um programa que leia uma letra e mostre se ela é vogal ou consoante

function tipoVogal(consulta){
    let letras = ['a', 'e', 'i', 'o', 'u']
    for(let l of letras){
        if(consulta == l){
            alert("vogal")
        }
    }
    
    
}


function tipoConsoante(consulta){
    let letras = ['b', 'c', 'd','f','g','h','j','k','l',
    'm','n','p','q','r','s','t','v','x','z']
    for(let l of letras){
        if(consulta == l){
            alert("Consoante")
        }
    }
    
    
}

let escolha = prompt('Informe uma letra: ')
tipoVogal(escolha)
tipoConsoante(escolha)

