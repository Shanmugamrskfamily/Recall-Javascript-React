const str='Hello From String!'
console.log(`\nGiven String: ${str}\n`);
//Method 1
const reverseStrMap=(str)=>str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
console.log(`Method 2: ${reverseStrMap(str)}\n`); //output: olleH morF !gnirtS

//Method 2
const reverseStr=(str)=>str.split('').reverse().join('');
console.log(`Method 1: ${reverseStr(str)}`); //output: !gnirtS morF ollH
