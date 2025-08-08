function numValid(a){
    return typeof a === 'number';
}

function fizzBuzz(a){
    if(numValid(a) === true){
        if(a % 3 === 0 && a % 5 === 0){
            return('FizzBuzz')
        } else if (a % 3 === 0){
            return('Fizz');
        } else if (a % 5 === 0){
            return('Buzz');
        } else {
            return(a);
        }
    } else{
        return(a);
    }
}

for (let i = 0; i <= 100; i++){
    console.log( fizzBuzz(i))
}