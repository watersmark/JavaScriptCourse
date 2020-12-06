`use strict`;

function longest(s1, s2) {
    
}

// create map
let mapTest = new Map();

// добавляем элементы, если элемент уже существовал
// он просто перезаписывается
// можно добавлять строки и числа как ключи 
mapTest.set('temp', 11);
mapTest.set('temp', 12);
mapTest.set(5, 1);

// получаем элементы из map по ключу
console.log(mapTest.get(5));
console.log(mapTest.get('temp'));

// узнаём размер map, size это
// свойство, а не метод
console.log(mapTest.size);

// очищаем map
// mapTest.clear();
// console.log(mapTest);

// узнаём есть ли в множестве 
// ключ который мы передали в метод
console.log(mapTest.has(5));
