const arr = [23, 12, 45, 21, 73, 3, 2];

const result = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) 
    {
        sum += arr[i];
    }
    return sum;
}

console.log(result(arr));
