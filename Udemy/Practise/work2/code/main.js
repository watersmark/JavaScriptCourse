`use strict`;

// для проверки, что значение равно NaN
// для undefind и +undefind и пустого значния выведется true
if(isNaN()){
    console.log("good");
}
else{
    console.log("bad");
}


// в данной функции используется задержка 
function first(){
    setTimeout(function(){
        console.log(1);
    }, 500);
    
}

// данная функция без задержки 
function second(){
    console.log(2);
}

first();
second();


// создадим callback функцию
// передадим внутрь ней другую функцию
// вторая функция выполнится только после первой 
function learnJS(arg1, arg2){
    console.log(`Я учу ${arg1}`);
    arg2();
}

// используем анонимную функцию
// анонимная функция исчезнет сразу после завершения метода, в который она
// была передана
learnJS('JS', function(){console.log("I end this lessons");});