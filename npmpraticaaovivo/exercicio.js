const fs = require('fs');
let lerModulos = fs.readFileSync(__dirname + '/aulaModulos.txt', 'utf8');
console.log(lerModulos);