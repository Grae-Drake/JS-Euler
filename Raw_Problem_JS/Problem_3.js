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
function main(num){
    var root = Math.sqrt(num);
    var answer = 0;
	for(var j=2; j<root; j++){
		if(num % j === 0) {
            big = num / j;
            if(big>answer){
                if(isPrime(big)){
                   answer = big;
                }
            }
            if(j>answer){
                if(isPrime(j)){
                    answer = j;
                }
            }
		}
	}
    return answer;
}

var limit = 600851475143;
var start = new Date()
console.log(main(limit));
var time = new Date() - start
console.log("This took " + time + " milliseconds")
