// IIFE -> Immediately invoked function expression
(function(idade, peso, altura) {

    const sobrenome = 'Henrique';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Victor'));
    }

    falaNome();
    console.log(`Tem ${idade} anos com ${peso}kg e ${altura}m`);
})(20, 64, 1.75);

falaNome()