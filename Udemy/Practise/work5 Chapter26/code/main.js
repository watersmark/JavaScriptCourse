`use strict`;


// множество можно создать с помощью преобразования 
// из объекта в map, с помощью метода который преобразует множество пар 
// объекта в набор массивов с ключ значением, который
// потом передаётся в конструктор map

let objTest = {
    name : 'Kostan',
    age : 32,
    money : 'dollar'
};

let mapEat = new Map(Object.entries(objTest));
console.log(mapEat, typeof(mapEat));


// теперь преобразуем map в объект обратно

let obj = Object.fromEntries(mapEat.entries());
console.log(obj.name);