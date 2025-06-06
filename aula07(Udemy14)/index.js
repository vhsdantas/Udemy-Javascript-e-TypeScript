/*
Não podemos criar constantes com palavras reservadas
Constantes precisam ter nomes significativos
Não pode começar o nome de uma constante com número
Não pode conter espaços ou traços
Utilizamos camelCase
Case-sensitive
Não pode modificar o valor de uma constante
Não utilize VAR, utilize CONST
*/

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(typeof(primeiroNumero))
