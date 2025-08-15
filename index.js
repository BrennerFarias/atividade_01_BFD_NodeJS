//Exercicio 1 - Solicite a idade de um usuário e se possui carteira de habilitação. Use IF com operador lógico && para verificar se tem 18 anos ou mais e carteira igual a "sim". Caso verdadeiro, exibir que pode dirigir, senão, exibe que não pode.
/*
const prompt = require ('prompt-sync')();
let nome = prompt ('Informe o seu nome: ')
let idade = Number (prompt('Digite sua idade: '))

if (nome && idade >= 18){
    console.log('Você está com permissão de dirigir!')
} else {
    console.log('Você não tem permissão de dirigir!')
}  
    */

//Exercicio 2 - faça um programa que crie a média final e a frequência do aluno. Use IF com o operador lógico && para verificar se a média é maior ou igual a 7 e a frequência maior ou igual a 75. Se verdadeiro, exibir que foi aprovado, senão que foi reprovado.

/*

const prompt = require ('prompt-sync')();
let nota1 = Number (prompt('Nota da primeira unidade: '))
let nota2 = Number (prompt('Nota da segunda unidade: '))
let media = (nota1 + nota2) / 2
//Na linha 81 e 83tive como auxilio da IA para me ajudar a montar a frequencia.

let aulasTotais = 45
let aulasAssistidas = Number(prompt('Quantas aulas você assistiu? '))
let mediaDeAula = (aulasAssistidas / aulasTotais) * 100

if (media >=7 && mediaDeAula >= 75) {
    console.log(Você ficou com média ${media}, e seu aproveitamento no curso foi de ${mediaDeAula.toFixed(1)}%, portanto FOI APROVADO!!)
} else {
    console.log(Você foi reprovado! Ficou com média ${media} e ${mediaDeAula.toFixed(1)}% de aproveitamento)
} //Usei a IA para me ajudar na formatação da média, usando sem o .tofixed, ficaram várias casas decimais.

*/

//exercicio 3 - Solicite ao usuário que digite o dia da semana e utilizando IF e ELSE IF, exiba mensagens diferentes para cada dia. Se for sábado OU domingo, exibir uma mensagem de fim de semana. Caso seja inválido, exibir aviso.

/*
const prompt = require ('prompt-sync')();
let dia = prompt ('Dale boy, que dia é hoje? ')
let diaFDS = ['sabado', 'domingo']
let diaDeLaje = ['segunda', 'terca','quarta', 'quinta', 'sexta']

if (diaFDS.includes(dia)) {
    console.log('É final de semana, meu rato! Bora pro desande :)')
} else if (diaDeLaje.includes(dia)) {
    console.log('Oxe, é dia de semana, boh bater uma laje meu compassa')
} else {
    console.log('Não reconheço esse comando, donzelo')
}   
    
*/

//Obs: Não demos aula de arrays, pesquisei na IA pra entender como funciona e me liguei :)

//Exercicio 4 - Solicite dois numeros e um simbolo de operação (+, -, *, /). Utilize IF e ElSE IF para verificar qual operação foi escolhida e mostrar o resultado. Caso seja inválida, exibir aviso.

/*

const prompt = require ('prompt-sync')()

let numero1 = Number (prompt('Digite o primeiro número: '))
let numero2 = Number (prompt('Digite o segundo número: '))
let operador = prompt ('Que tipo de operação você deseja realizar?  +, - , * , / ')
if (operador === '+') {
    console.log(`A soma de ${numero1} e ${numero2} é de:${numero1 + numero2} `)
} else if (operador === '-') {
    console.log(`A subtração de ${numero1} e ${numero2} é de: ${numero1 - numero2} `)
} else if (operador === '*') {
    console.log(`A multiplicação de ${numero1} x ${numero2} é de: ${numero1 * numero2}`)
} else if (operador === '/') {
    if (numero2 === 0) {
        console.log('ERRO: divisão por 0 não é permitida!')
    } else {
        console.log(`A divisão entre ${numero1} e ${numero2} é de: ${numero1 / numero2}`)
    }
} else {
    console.log('Operação inválida! Use apenas +, - , * , / ')
}
    //NOTAS: Auxilio do gpt para organizar e declarar como ficariam os operadores e na construção do "erro" e operação inválida.

*/


//Exercicio 5 - Verificador de faixa etária: Solicite que o usuário entre com sua idade e utilize IF e ELSE IF para classificar e exibir uma mensagem apropriada. Se a idade for menor que 12 anos, exiba "Você é uma criança". Se estiver entre 12 e 17 anos, exiba "Você é um adolescente". Se estiver entre 18 e 59 anos, exiba "Você é um adulto" e se for 60+, informe que é um idoso. Caso o valor digitado seja invalido, mostre "idade inválida, tente novamente"

/*

const prompt = require ('prompt-sync')()
let nome = prompt('Digite seu nome: ')
let idade = Number (prompt('Digite sua idade: '))

if (idade < 0 || isNaN(idade)) {
    console.log('Idade inválida, tente novamente');
} else if (idade < 12) {
    console.log('Você é um pirraia!');
} else if (idade >= 12 && idade <= 17) {
    console.log('Você é aborrecente!');
} else if (idade >= 18 && idade <= 59) {
    console.log('Você já é adulto!');
} else if (idade >= 60) {
    console.log('Você já é coroa!');
}

*/
        //Notas: GPt para me ajudar a encontrar o comando IsNaN, muito legal para saber como colocar caracter inválido sem ser de números :)


//Exercicio 6 - solicite ao usuário o valor total da compra e utilize IF e ELSE IF para aplicar um desconto conforme o valor informado. Se o valor for menor que R$ 100, exiba "Sem desconto". de R$ 100 até R$199, aplique 10% de desconto. De R$200 até R$499, aplique 20% de desconto, se for de R$500 ou mais, aplique 30%. Mostre o valor já com o desconto aplicado, caso o valor seja inválido, exiba "Valor inválido, tente novamente."

/*

const prompt = require ('prompt-sync')()
console.log('Calculadora de desconto :)')
let valorDaCompra = Number(prompt('Digite o valor da sua compra: '))

if (isNaN(valorDaCompra) || valorDaCompra < 0) {
    console.log('Valor inválido, tente novamente!')
} 
else if (valorDaCompra < 100) {
    console.log(`Sem desconto! Valor a pagar: ${valorDaCompra}`)
} else if (valorDaCompra >= 100 && valorDaCompra <= 199) {
let desconto = valorDaCompra * 0.10
let valorFinal = valorDaCompra - desconto
    console.log(`10% de deconto foi aplicado a sua compra! Valor final: ${valorFinal.toFixed(2)}`)
} else if (valorDaCompra >= 200 && valorDaCompra <= 499) {
let desconto20 = valorDaCompra * 0.20
let valorfinal2 = valorDaCompra - desconto20
    console.log(`20% de desconto foi aplicado a sua compra! Valor final: ${valorfinal2.toFixed(2)} `)
} else if (valorDaCompra >= 500) {
let desconto30 = valorDaCompra * 0.30
let valorFinal3 = valorDaCompra - desconto30
    console.log (`30% de desconto foi aplicado a sua compra! Valor final: ${valorFinal3.toFixed(2)} `)
}

*/

  //Notas: por burrice minha em matemática, não sabia como descontar em porcetagem passo a passo, então foi necessário a ajuda da IA.

  
//Exercicio - 7 solicite ao usuario um numero e utilize IF e Else para verificar se ele é PAR ou IMPAR, exibindo a mensagem correspondente. Caso o valor digitado não seja um número válido, mostre "Número inválido"

/*

const prompt = require ('prompt-sync')();
console.log('É par ou impar? :)')
let numero = Number (prompt('Digite um número: '))

if (isNaN(numero)) {
    console.log('Por favor, digite um número válido!')
} if (numero %2 === 0) {
    console.log('Esse número é par!')
} else {
    console.log('Esse número é ímpar!')
}

*/

  //Usei a pesquisa para lembrar como um número se tornava par. em seguida, apenas um else já retornava seu oposto.

  //Exercicio 8 - pergunte a idade de um usuário e se ele possui permissão dos pais, sendo a resposta "sim" ou "nao". o programa deve permitir o acesso se o usuário tiver 18 anos ou mais. caso contrario, o acesso só deve ser permitido se ele tiver permissão dos pais. se nenhuma dessas condições for atendida, o programa deve negar o acesso

/*

  const prompt = require('prompt-sync')()

  let idade = Number(prompt('Qual a sua idade? '))
  if (idade >= 18) {
    console.log('Acesso permitido!')
  } else {
    let permissao = prompt('Você tem permissão dos pais? (sim/nao): ').toLowerCase() === 'sim'
    if (idade < 18 && permissao) {
      console.log('Você é de menor, mas tem permissão de entrar!');
    } else {
      console.log('Acesso negado!');
    }
  }

    */  

     //Notas: empaquei na linha 171 por causa do ToLowerCase, mas lendo conteúdos, consegui compreender.

//Considerações finais: Os exercícios foram bem legais, espero que toda semana tenha! Senti um pouco de dificuldade, demorei um tempo considerável para conseguir resolver tudo (do meu jeito, sei que alguns códigos podem ser desnecessários) porém fiz com muita dedicação e empenho. Tive ajuda externa como nas notas que deixei nos programas, porém saio de cabeça tranquila sabendo que não fiz ctrl c + ctrl v, buscando assim entender o motivo e a função de cada descoberta. Valeu Nat :)
  