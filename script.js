// "use strict";

// const arr = [1, 2, 3, 4, 5];

// const obj = {
//   name: "John",
//   age: 30,
// }

// const arrObj = {
//     one: "one",
//     2: "two",
//     3: "three"
// }
// const b = 'b';

// // arrObj.b = '111';
// arrObj[b] = '111';
  
// console.log(arrObj["b"]);
// console.log(arrObj.b);
// console.log(arr[2]);
// console.log(obj.name + " age " + obj.age);

// const storeName = "storeName";

// const storeDescription = {
//     budget: 10000,
//     employees: ["John", "Alice", "Bob"],
//     products:{
//         apple: 100,
//         banana: 200
//     },
//     open: true
// }

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'



2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    error: '',
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        personalMovieDB.error = 'Вы ввели пустые значения больше 1 раз';
    }
}
console.log(personalMovieDB);



