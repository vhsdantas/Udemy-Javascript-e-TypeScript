let agora = new Date()
const nome = 'Victor Henrique';
const sobrenome = 'Dantas';
const idade = 21; 
const peso = 63;
const alturaEmM = 1.75;
let indiceMassaCorporal = peso / (alturaEmM * alturaEmM); //peso / (altura * altura)
let anoNascimento = 2025 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`)
console.log(`tem ${alturaEmM}m de altura e seu IMC é de ${indiceMassaCorporal}`)
console.log(`${nome} nasceu em ${anoNascimento}.`)