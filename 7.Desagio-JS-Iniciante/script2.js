/*Desafio 02*/

/*Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.*/

let estudantes = [{nome: "Anderson", nota1: 10, nota2: 9}, {nome: "Maiara", nota1: 8, nota2: 7},{nome: "Mariá", nota1: 10, nota2: 10}, {nome: "João", nota1: 5, nota2: 3}]

console.log(estudantes);

/*Crie uma função que irá calcular a média das notas de cada aluno*/

function calculoMedia(estudante){
    
    for(let property in estudante){
        let media = (estudante[property].nota1 + estudante[property].nota2) /2
        let nomeEstudante = estudante[property].nome
        if(media >= 7){
            alert(`A média do(a) aluno(a) ${nomeEstudante} é ${media}\nParabéns, ${nomeEstudante}! Você foi aprovado(a) no concurso!`)

        }else{
            alert(`A média do(a) aluno(a) ${nomeEstudante} é ${media}\nNão foi dessa vez, ${nomeEstudante}! Tente novamente!`)
        }
    }
}

calculoMedia(estudantes)