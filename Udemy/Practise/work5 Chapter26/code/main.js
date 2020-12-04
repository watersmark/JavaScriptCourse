`use strict`;

// обращаемся к элементам страницы
const box = document.getElementById('box'),
            btns = document.getElementsByTagName('button'),
            hearts = document.querySelectorAll('.heart');

// ставим для элемента методы поотдельности
// btns[1].style.borderRadius = '100%';

// ставим несколько тегов для элемента страницы
box.style.cssText = 'backgroung-color: blue; width: 500px';

// перебираем элементы внутри псевдоцикла
for(let i = 0; i < hearts.length; i++){
    hearts[i].style.backgroundColor = 'blue';
}


for(let elem in hearts){
    console.log(typeof(elem));
    console.log(hearts.length);
}
