let message = 'Hello Wolrd';
alert('Hello World!');

const sum = 2+2;
alert(sum);

const age = parseInt(prompt ('Enter your age'));
alert('Your age is' + age)

const nextAge = add(age + 1);
alert('Next year you will be' + nextAge)


// String - '',""
// Number -1, 2.5, NaN, +Infinity, -Infinity
//
// Boolean 
// true, false

// undefined
// null
// object

// symbol
// ES2015:
// BigInt


if (age < 18) { // < > <= >= === == !== || &&
    alert('You are underaged!')
} else{
    alert('You are adult!')
}

function add(a,b){
    const sum = a + b;
    return sum;
}