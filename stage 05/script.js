/*
💡 Principais pontos abordados nesse desafio:

- Estrutura de dados com objetos;
- Estrutura de repetição;
- Criação de funções;
- Operadores comparativos;

Bora praticar e rever tudo o que foi ensinado na aula?

Nesse desafio você irá criar uma lista de estudantes e, 
cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

O resultado final desse desafio deve ser algo em torno de:*/

const students = [
  {
    name: "Elton",
    firstNote: 9,
    secondNote: 8,
    
  },
  {
    name: "Dara",
    firstNote: 4,
    secondNote: 2,
    
  },
  {
    name: "Claudia",
    firstNote: 6,
    secondNote: 8,
    
  },
  {
    name: "Julio",
    firstNote: 9,
    secondNote: 6,
    
  },
  
]

function averageNote(firstNote, secondNote) {
  return ((firstNote + secondNote) / 2) .toFixed(1)
}

for(const position of students) {

  if(averageNote(position.firstNote,position.secondNote) >= 7) {

      alert(`A média do(a) aluno(a) ${position.name} é: ${averageNote(position.firstNote,position.secondNote)} \n
      Parabéns, ${position.name}! Você foi aprovado(a) no concurso!`)
      
  } else {
      alert(`A média do(a) aluno(a) ${position.name} é: ${averageNote(position.firstNote,position.secondNote)} \n
      Não foi dessa vez, ${position.name}! Tente novamente!`)
  }
}
