const numbers=[1,2,3,4];

let multiply=numbers.map(num=>num*num);


console.log(`Input: ${numbers}\nType of Input: ${typeof(numbers)}`);

numbers.forEach(num=>{
    console.log(num*num);
})


console.log(`Multiply using MAP: ${multiply}\nType of MAP: ${typeof(multiply)}`);
