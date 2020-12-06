`use strict`;

function longest(s1, s2) {
    let map = new Map([["a", 0], ["b", 0], ["c", 0], ["d", 0], ["e", 0], ["f", 0], ["g", 0], ["h", 0], ["i", 0], ["j", 0], ["k", 0], ["l", 0], ["m", 0], ["n", 0],
                        ["o", 0], ["p", 0], ["q", 0], ["r", 0], ["s", 0], ["t", 0], ["u", 0], ["v", 0], ["w", 0], ["x", 0], ["y", 0], ["z", 0]]);
    
    for(let indexElem = 0; indexElem < s1.length; indexElem++){
        map.set(s1[indexElem], 1);
    }

    for(let indexElem = 0; indexElem < s2.length; indexElem++){
        map.set(s2[indexElem], 1);
    }
    
    let resStr = new String();

    map.forEach((value, item) => {
        if(value != 0) resStr += item;
    });

    return resStr;
}



a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"

if(longest(a, b) == "abcdefklmopqwxy"){
    console.log(true);
}
