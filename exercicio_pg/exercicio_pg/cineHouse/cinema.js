const adicionarFilme = require('./adicionarFilme');

const catalogo = [
  {
    codigo: 3,
    titulo: 'Donnie Darko',
    duracao: 2 ,
    atores: ['Jake Gyllenhaal', 'Drew Berrymore'], 
    anoDeLancamento: 2001,
    emCartaz: false
  },
  {
    codigo: 1,
    titulo: 'Encanto', 
    duracao: 1.50,
    atores: ['Stephanie Beatriz', 'Maluma','Rhenzy Feliz'], 
    anoDeLancamento: 2021,
    emCartaz: true
  }
];

//código, titulo, duracao, atores, anoLancamento, emCartaz
const novoFilme1 = adicionarFilme(2,'Monstros SA',1.36,['John Goodman'],2001,true, catalogo)
catalogo.push(novoFilme1);

console.log("=================================")

// Criando a função de buscar filme com indexOf
function buscarFilme(identificador){
  // Indíce é a mesma coisa que posição
  // Para cada posição do array, faça isso:
  // 1° parâmetro => criação do contador
  // 2° parâmetro => condição
  // 3° parâmetro => incremento

  for(var indice = 0; indice < catalogo.length; indice++){
    if(catalogo[indice].codigo === identificador){
      console.log(catalogo[indice])
    }
  }

  // 1° vez ele executa catalogo[0]
  // 2° vez ele executa catalogo[1]
  // 3° vez ele executa catalogo[2]

}
// Busca o filme que tem o código 3
buscarFilme(3);

console.log("=================================")

function alterarStatusEmCartaz(id_codigo) {

  for (var i = 0; i < catalogo.length; i++) {

    if (catalogo[i].codigo === id_codigo) {

      if (catalogo[i].emCartaz === false) {

        catalogo[i].emCartaz = true

      } else {

        catalogo[i].emCartaz = false

      }

      return catalogo[i]
    }

  }

}

console.log(alterarStatusEmCartaz(3))





