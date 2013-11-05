// What is the largest prime factor of the number 600851475143?

function isPrime(num){
    var root = Math.sqrt(num);
    for(var i=2 ; i<=root; i++){
        if(num%i === 0) {
            return false;
        }
    }
    return true;
}
function factors(num){
    var array = [];
    var root = Math.sqrt(num);
	for(var j=2; j<root; j++){
		if(num % j === 0) {
			array.push(j);
            array.push(num/j);
		}
	}
    array.sort(function(a,b){return b-a});
    return array;
}

function main(limit){
    var array = factors(limit);
    console.log(array);
    for(var k=0 ; k<array.length ; k++){
        candidate = array[k];
        if(isPrime(candidate)===true){
            return candidate;
        }
    }
    return "error, will robinson";
}

console.log(main(600851475143));
