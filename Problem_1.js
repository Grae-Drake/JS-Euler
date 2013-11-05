// Sum of all multiples of 3 and 5 below 1000

function multiplesThreeFive(limit) {
	var counter = 0;
	for (i = 1 ; i < 1000 ; i++) {
		if (i % 3 === 0) {
			counter += i;
		}
		else if (i % 5 === 0) {
			counter += i;
		}
	}
	return counter;
}

