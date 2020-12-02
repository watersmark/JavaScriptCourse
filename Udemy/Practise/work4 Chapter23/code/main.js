`use strict`;

// создадим два объекта один из которых
// будет более глобальным чем второй
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log("Hello All");
    }
};

// отдельный объект
const john = {
      health: 120
};

// отдельный объект

const mark = {
    health: 200
};

// устанавливаем прототип для
// объекта john, данный метод
// является устаревшим
john.__proto__ = soldier;
console.log(john.sayHello());

// более современный метод создания прототипов

Object.setPrototypeOf(mark, soldier);
console.log(mark.armor);

// для создания прототипа до инициализации объекта

const maks = Object.create(soldier);
console.log(maks.sayHello());
maks.armor =400;
console.log(maks.armor);