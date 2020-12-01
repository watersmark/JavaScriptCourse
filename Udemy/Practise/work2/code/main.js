`use strict`;

// создаём объект
// внутри объекта создадим свойства
// так же создадим методы
const options = {
    name: 'Sanya',
    width: 1024,
    height: 1024,
    
    color: {
        border: 'black',
        bg: 'red'
    },

    makeTest: function(firsttArg, secondArg){
        return firsttArg + secondArg;
    }

};


// мы можем получить массив ключей из объекта
// исользуем interface Object и его метод keys
// потом берём у массива метод length и получаем
// кол-во свойств в объекте
console.log(Object.keys(options).length);

// вызовем метод из объекта
console.log(options.makeTest(1, 41));


// для деструктуризации, можно вытаскивать объекты 
// из родительского объекта
const {border, bg} = options.color;

console.log(border);
console.log(bg);

