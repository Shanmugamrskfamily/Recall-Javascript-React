let rating=[1,2,3];

//3
//1
//2

const candies=(input)=>{

    let highRating=input[1];
    let candiesCount=parseInt(input.length);
    for(let i=0;i<parseInt(input.length);i++){

        if(input[i]>input[i+1]){
            candiesCount++;
            highRating=input[i];
        }

        if(input[i]>input[i-1]){
            candiesCount++;
            highRating=input[i];
        }

        if(input[i-1]>input[i])
        {
            candiesCount++;
            highRating=input[i-1];
        }

        if(input[i+1]>input[i]){
            candiesCount++;
            highRating=input[i-1];
        }

        //console.log(`Highest Value: ${highRating}`);
        
        if(input[i]>highRating){
            candiesCount++;
        }

    }
    return candiesCount;
}

console.log(`Given Rating: ${rating}`);
console.log(`Minimum Candies Required: ${candies(rating)}`);