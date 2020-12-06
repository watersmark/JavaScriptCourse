`use strict`;

let stepForResult = 0;
let lastDigit = null;

function seven(m) {

    let temp1 = parseInt(m / 10);
    let temp2 = m % 10;
    let resTempDigit = temp1 - 2 * temp2;
    
    if(new String(resTempDigit).length <= 2){
        lastDigit = resTempDigit;
        stepForResult++;
    }
    else{
        stepForResult++;
        seven(resTempDigit);
    }
    
    return [lastDigit, stepForResult];
}

console.log(seven(1021));