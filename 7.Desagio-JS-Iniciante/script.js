/*Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:*/

alert("Informe 2 numeros: ")
let num1 = Number(prompt("numero 1: "))
let num2 = Number(prompt("numero 2: "))

/*A soma dos dois números;*/
let soma = num1 + num2
alert("Soma: " + soma)

/*A subtração dos dois números;*/
let sub = num1 - num2
alert("Subtração: " + sub)

/*A multiplicação dos dois números;*/
let mult = num1 * num2
alert("Multiplicação: " + mult)

/*A divisão dos dois números;*/

let divisao = num1 / num2
divisao.toFixed(2)
alert("Divisão:" + divisao)

/*O resto da divisão dos dois números;*/
let restDivi = num1 % num2
alert("Resto da Divisão: " + restDivi)

console.log(`Soma: ${soma}`)
console.log(`Subtração: ${sub}`)
console.log(`Multiplicação: ${mult}`)
console.log(`Divisão: ${divisao}`)
console.log(`Resto da divisão: ${restDivi}`)

/*Verifique se a soma dos dois números é par ~~(ou ímpar)~~;*/

if(soma % 2 == 0){
    alert("A soma dos números é par")
}else{
    alert("A soma dos números é impar")
}

/*Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.*/
if(num1 === num2){
    alert("Os números são iguais")
}else{
    alert("Os números não são iguais")
}
