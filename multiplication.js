if (multiplication(4,5,6) !== 120) {
    throw new Error('Multiplication is wrong');
}

if (multiplication(4,5,0) !== 0) {
    throw new Error('Multiplication is wrong when a number is 0');
}

if (multiplication(4,5) !== 20) {
    throw new Error('Multiplication needs to support less than 3 numbers')
}


console.log('All good!! :)')


function multiplication(x , y , z ) {
    if (!x && x !== 0) {
        x = 1
    }

    if (!y && y !== 0) {
        y = 1
    }

    if (!z && z !== 0) {
        z =1;
    }
    return x * y * z; 
}


console.log(add(5, 10)) // TypeError: add is not a function

const add = function(x, y) {
    return x+y;
}