let arr = [12, 3, 6, 88, 89, 30, 10, 1, 5];
let primeNum = [];

const isPrime = (num) => {
    if (num < 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

const findPrimes = () => {
    arr.forEach((num) => {
        if (isPrime(num)) {
            primeNum.push(num);
        }
    });
}

findPrimes();
console.log(`Prime Numbers: ${primeNum.sort((a, b) => b - a)}`);
const res=document.getElementById('root');
res.innerText=`Prime Numbers: ${primeNum.sort((a, b) => b - a)}`