`use strict`;

// создадим map и добавим в него значения поумолчанию
let mapEat = new Map([['milk', 250], [{eat : {orn: 454}}, 400], ['bread', 45]]);


// перебираем значения элементов из map ы цикле
// map можно перебрать только через of
// в map перебор происходит в порядке вставки элементов
for (let elem of mapEat){
    console.log(elem);
}

// перебираем map по ключам
for(let elem of mapEat.keys()){
    console.log(elem);
}

// перебираем map по значениям
for(let elem of mapEat.values()){
    console.log(elem);
}

// у map есть встроенный метод forEach

mapEat.forEach((value, key, map) => {
    console.log(key, value);
});

