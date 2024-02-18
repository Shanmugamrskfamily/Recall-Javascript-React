let string='Hello World!';

const method1=(str)=>{
    return str.split('').reverse().join('');
}

const method2=(str)=>{
    return str.split(' ').map(word=>word.split('').reverse().join('')).join(' ');
}

console.log(`Given String: ${string}\n`);
console.log(`Method 1: ${method1(string)}\n`);
console.log(`Method 2: ${method2(string)}`);