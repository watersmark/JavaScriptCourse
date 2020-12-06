`use strict`;

// function collable sort
function sorts(a, b){
    return a - b;
}

// main function
function findOdd(A) {

    // sort mass
    A.sort(sorts);
    // count other digit
    let countDigit = 0;
    
    for (let i = 0; i < A.length; i++){
        
        // last digit case
        if(i == A.length - 1){
            return A[i];
        }

        // common elem case
        if(A[i] !== A[i - 1]){
            if(countDigit % 2 != 0) return A[i - 1];
            countDigit = 0;
        }

        // incr
        countDigit++;
    }

}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));



