/*
💡 O que será abordado nesse desafio:

- Variáveis;
- Operações matemáticas;
- Operadores comparativos;
- Condicional.

Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par (ou ímpar);
- [ ]  Verifique se os dois números inseridos são iguais (ou diferentes).*/

let firstNumber = prompt ("digite o primeiro numero")
let secondNumber = prompt ("digite o segundo numero")


firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sun = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restodiv = firstNumber % secondNumber

alert("A soma dos dois números é :" + sun)
alert("A subtração dos dois números é :" + sub)
alert("A multiplição dos dois números é :" + multi)
alert("A divisão dos dois números é :" + div)
alert("O resto dos dois números é :" + restodiv)


if ((firstNumber + secondNumber) % 2 == 0) {
  alert(`A soma dos dois números é par : ${sun}`)
} else {
  alert(`A soma dos dois números é ímpar : ${sun}`)
}

if(firstNumber != secondNumber) {
  alert(`Os números inseridos são diferentes.`)
} else {
  alert(`Os números inseridos são iguais.`)
}


