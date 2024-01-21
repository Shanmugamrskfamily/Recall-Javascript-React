const ans = document.getElementById("answer");
// Function to check if a number is prime
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
// Function to count prime numbers between start and end
const countPrimesInRange = () => {
    const start = parseInt(document.getElementById("start").value);
    const end = parseInt(document.getElementById("end").value);
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    ans.innerText = `Number of prime numbers between ${start} and ${end} is: ${count}`;
};