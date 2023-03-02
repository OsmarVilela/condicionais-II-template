//const idadeDependente = Number(prompt("Qual a idade do dependente?"))
// VERSÃO ANINHADO
/* if(idadeDependente >= 13) {
    if(idadeDependente < 18){
        console.log("Cartão Aprovado para dependente")
    } else {
        console.log("Maior de idade: Consulte outras opções do Labank")
    }
} else {
    console.log("Menor de idade: Consulte outras opções do Labank")
    } */

// VERSÃO COM COMPARADORES &&
/* if(idadeDependente >=13 && idadeDependente < 18){
    console.log("Cartão Aprovado para dependente")
} else {
    console.log("Consulte outras opções")
} */

// if ternario
/* idadeDependente === 13 ? console.log("Idade 13 anos, pode ter cartão") : console.log("idade diferente, não pode ter cartão") */

// switch case
/* const cartao = Number( prompt("Digite o n° do tipo do cartão escolhido"))

switch(cartao) {
    case 1:
        console.log("cartão facil")
        break
    
    case 2:
        console.log("cartão black")
        break
    
    case 3:
        console.log("cartão platinum")
        break

    case 4:
        console.log("cartão master")
        break

    default:
        console.log("Escolha apenas as opções acima")
} */

const numero = Number(prompt("digite um número"))

// if aninhado
/* if(numero % 2 === 0){
    if(numero % 3 === 0){
        console.log("é divisivel por 2 e 3")
    }
    console.log("é divisivel por 2")
} else {
    console.log("numero NÃO é divisivel por 2 e 3")
}  */

// if com operador logico
if(numero % 2 === 0 && numero % 3 === 0) {
   // numero === 30 ? console.log("Ufa, acertei") : console.log("Não foi dessa vez :(")
   switch(numero){
    case 6:
        console.log("número é 6")
        break
    case 12:
        console.log("número é 12")
        break
    case 18:
        console.log("número é 18")
        break
    case 24:
        console.log("número é 24")
        break
    case 30:
        console.log("número é 30")
        break
    default:
        console.log("O número é maior que 30 ou menor que 6!")
}
    console.log("número é divisivel por 2 e 3")

} else {
    //número === 30 ? console.log("Ufa, acertei") : console.log("Não foi dessa vez :(")
    console.log("número NÃO é divisivel por 2 e 3")
}
