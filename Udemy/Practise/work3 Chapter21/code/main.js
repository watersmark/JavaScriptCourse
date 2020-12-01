`use strict`;
 
// при передаче примитивов в переменную записывается 
// байт код назначенного значения
// объекты передаются по ссылке


// чтобы скопировать объект можно использовать цикл
// данный метод может скопировать отдельные переменные
// но если у нас есть объект в объекте, то метод
// не сделает отдельную копию, а кинет уже существующую ссылку
function copy(mainObj){
    let objCopy = {};

    let key;
    for (key in mainObj){

        objCopy[key] = mainObj[key];

    }

    return objCopy;
}


const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 8,
        y: 4
    }
};


const numbersNew = copy(numbers);

numbers.a = 323223;

console.log(numbers);
console.log(numbersNew);