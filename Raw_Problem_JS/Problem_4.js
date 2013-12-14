function isPalindrome(num) {
    // Return true if num is a palindrome.
    var original = num.toString();
    var reversed = original.split("").reverse().join("");
    return (original === reversed);
}


function nextPalindrome(limit) {
    // Returns the largest palindrome equal to or less than
    // the limit.
    while (true) {
        if (isPalindrome(limit)) {
            return limit;
        } else {
            limit -= 1;
        }
    }
}

function testFactors(palindrome, n) {
    // Return true if argument has two factors with n digits 
    // each, otherwise, return false.
    var start = Math.pow(10,(n-1));
    var stop = Math.pow(10,n);
    var testNum = start;
    while (testNum < stop){
        if (palindrome % testNum === 0) {
            coFactor = palindrome/testNum;
            if (coFactor < stop && coFactor > start) {
                console.log(testNum, coFactor);
                return true;
            } else {
                testNum += 1;
            }
        } else {
        testNum += 1;
        }
    }
    return false;
}

function main(limit, n) {
    // Starts a limit and finds the highest palindrome equal to or lower than limit, 
    // then tests that palindrome to see if it has two n-digit factors.  If not, 
    // it finds the next largest palindrome and repeats.
    var palindrome = nextPalindrome(limit);
    while(palindrome > 100) {
        if (testFactors(palindrome, n)) {
            return palindrome;
        } else {
            palindrome = nextPalindrome(palindrome - 1);
        }
    }
    return false;
    
}