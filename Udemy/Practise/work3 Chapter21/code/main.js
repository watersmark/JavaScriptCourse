`use strict`;

// чтобы соеденить несколько объектов в один
// используем метод интерфейса Object
// данный метод можно использовать для поверхностного клонирования 
// объектов
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 8,
        y: 4
    }
};

const add = {
    d: 17,
    e: 20
};

// переносим одтн объект в другой
const tempConcat = Object.assign(numbers, add)

// клонируем поверхностно в пустой объект
// уже существующий массив add
const clone = Object.assign({}, add);


// При клонировании массивов
// можно использовать slice
// Получим два независимых массива
const arrayOld = [1, 3, 4];
const arrayNew = arrayOld.slice();


// чтобы переместить несколько массивов в один
// используем синтаксис преведённый ниже
// называемый оператором разворота
const video = ['youtube', 'vimeo', 'facebook'],
    blogs = ['wordpress', 'leveblog', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'mail'];

console.log(internet);
console.log(typeof(internet));


// чтобы разложить массив на отдельные 
// элементы используем (...mass)

let mass = [1, 7, 22];

function log(a, b, c){
    console.log(a, b, c);
}

log(...mass);

// данным методом можно тоже создать копию
// получаем ссылку на новый объект
const array1 = [...mass];
console.log(array1);

// для копирования объектов
const q = {
    one: 1,
    two: 2
};
const obj = {...q};
console.log(obj);