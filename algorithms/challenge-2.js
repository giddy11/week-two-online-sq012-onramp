function checkPrime(num) {
    const s = Math.sqrt(num);
    if(num < 2) return false;
          else if (num % 2 === 0 && num > 2) return false;
     for (let i = 3; i <= s; i += 2){
       if(num % i === 0) return false;
     }
     return true
}


console.log(checkPrime(5));

module.exports = checkPrime