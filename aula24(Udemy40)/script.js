const hora = 50;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora > 11 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora > 17 && hora <= 23) {
    console.log('Boa noite')
} else {
    console.log('Olá')
}