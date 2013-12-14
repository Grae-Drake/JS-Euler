// Sum of all multiples of 3 and 5 below limit

function euler(limit) {
	var counter = 0;
	for (var i = 1 ; i < limit ; i++) {
		if (i % 3 === 0) {
			counter += i;
		}
		else if (i % 5 === 0) {
			counter += i;
		}
	}
	return counter;
}

