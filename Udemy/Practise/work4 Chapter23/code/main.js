`use strict`;

// в JS при использовании метода 
// примитив оборачивается в объект 
// потом применяется метод и возвращается обратно примитив
let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));


console.dir([1, 3, 4]);