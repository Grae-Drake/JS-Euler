// What is the largest prime factor of the number 600851475143?

function isPrime(num){
    var root = Math.sqrt(num);
    for(i=2 ; i<root; i++){
        if(num%i === 0) {
            return false;
        }
    }
    return true;
}

function largestPrimeFactor(target){
    var factors = [];
    var root = Math.sqrt(target);
	for(i=2; i<root; i++){
		if(target % i === 0) {
			factors.push(i);
            factors.push(target/i);
		}
	}
    factors.sort(function(a,b){return b-a});
    for(i=0 ; i<factors.length-1 ; i++){
        if(isPrime(factors[i]) === true) {
            return factors[i];
        }
    }
}

//console.log(largestPrimeFactor(13195));
console.log("hello");
