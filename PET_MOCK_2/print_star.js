const printStar=(num)=>{
    let star='*';
    let output='';
    for(let i=num;i>=1;i--){
        for(let j=1;j<=i;j++){
            output+=star;
        }
        output+='\n';
    }
    return output;
}

console.log(printStar(5));