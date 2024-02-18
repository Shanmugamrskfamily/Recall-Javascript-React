const titleCaps=(str)=>{
    return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join(' ');
}

const titleLower=(str)=>{
    return str.split(' ').map(word=>word.charAt(0).toLowerCase()+word.slice(1).toUpperCase()).join(' ');
}

const sentence='hello wOrld!';

console.log(`Given Sentence: ${sentence}`);
console.log(`Title Caps: ${titleCaps(sentence)}`);
console.log(`Title Lower: ${titleLower(sentence)}`);
