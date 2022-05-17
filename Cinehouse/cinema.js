var cinema = 'Cinema DH';
console.log(cinema);
var catalogo = [
  {codigo: 3, titulo: 'Donnie Darko', duracao: 2 ,atores:['Jake Gyllenhaal', 'Drew Berrymore'], anoDeLacamento: 2001 ,emCartaz: false},
  {codigo: 1, titulo: 'Encanto', duracao: 1.50 ,atores:['Stephanie Beatriz', 'Maluma','Rhenzy Feliz'], anoDeLacamento: 2021 ,emCartaz: true}
]
console.log(catalogo);
function adicionarFilme (codigoX,tituloX,duracaoX,atoresX,anoDeLacamentoX,emCartazX) {
  catalogo.push ({codigo: codigoX, titulo: tituloX, duracao: duracaoX ,atores:atoresX, anoDeLacamento: anoDeLacamentoX ,emCartaz: emCartazX}) 
}
adicionarFilme(2,'Monstros SA',1.36,['John Goodman'],2001,true);
console.log(catalogo);

let achaFilme;
function buscarFilme (codigoIdentificador){
  achaFilme = catalogo.find(catalogo => catalogo.codigo === codigoIdentificador )
  console.log(achaFilme)

} 
buscarFilme(3)
let trocaStatus
function alterarStatusEmCartaz (codigoIdent){
  trocaStatus = catalogo.find(catalogo => catalogo.codigo === codigoIdent )
  console.log(trocaStatus)
  codigoIdent = !codigoIdent
  console.log(codigoIdent)
}
alterarStatusEmCartaz(2);

