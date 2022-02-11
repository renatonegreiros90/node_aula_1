const {maiorDeIdade, imprimeIdade} = require('./verificador-de-idade')

//const [idade] = process.argv.slice(2);
const args = process.argv;
const idade = args[2];

//console.log({args});
imprimeIdade(idade);
console.log(maiorDeIdade(idade));
