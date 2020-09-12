"use sctrict";


let numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?","");


const personalMovieDb = {
count: numberOfFilms,
movies:{},
actors:{},
genres:[],
privat:false
};


let a = prompt("Один из последних просмотренных фильмов?", " ");
let b = +prompt("На сколько оцените","");
let c = prompt("Один из последних просмотренных фильмов?", " ");
let d = +prompt("На сколько оцените","");

personalMovieDb.movies[a]=b;

console.log(personalMovieDb);