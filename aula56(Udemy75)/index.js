// Factory function (Função fábrica)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
        },

        fala(assunto = 'falando sobre NADA') {
            return `${this.nome} está ${assunto}.`
        },

        altura: a,
        peso: p,

        //Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Victor', 'Henrique', 1.75, 64);
const p2 = criaPessoa('Julia', 'Flor', 1.55, 48);
const p3 = criaPessoa('Lucia', 'Souza', 1.67, 52);

console.log(p1.imc);
console.log(p2.fala('falando sobre jogos'));
console.log(p3.nomeCompleto);