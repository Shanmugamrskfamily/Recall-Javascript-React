const str='hello world this is String!';
const result= str.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' ');
console.log(result);