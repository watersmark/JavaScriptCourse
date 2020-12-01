`use strict`;

// создаём объект
const options = {
    name: 'Sanya',
    width: 1024,
    height: 1024,
    color: {
        border: 'black',
        bg: 'red'
    }
};

// для удаления элемента из объекта
// используем оператор delete
// свойство будет полностью удалено
delete options.name;
console.log(options);

// для перебора всех свойств объектов
// используем цикл
// внутри цикла проверяем, что является ли наше 
// свойство вложенным объектом
for (let key in options){
    if(typeof(options[key]) === 'object'){
        for(let i in options[key]){
            console.log(`войство ${i} имеет значение ${options[key][i]}`); 
        }
    }
    else{
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }

   
}

