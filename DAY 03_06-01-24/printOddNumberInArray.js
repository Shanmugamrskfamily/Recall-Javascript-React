let arr=[1,2,3,4,5,6,7,8,9];
let odd=[];

// for (let i = 0; i < arr.length; i++) 
// {
//     if (arr[i] % 2 !== 0) 
//     {
//         odd.push(arr[i]);
//     }
// }

arr.map((number)=>{
    if (number % 2 !== 0) 
    {
        odd.push(number);
    }
});
console.log(`Odd Numbers: ${odd}`);