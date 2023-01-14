// Syntax and Declaration

// var score = 10;   //ES5 -Ecma
// let result = 50;  //ES6-Ecmascript 2015
// const PI = 3.14;  //ES6

// score = 15;
// result = 55;
// PI = 3.45; we cannot change the value of pi as above we have stated pi as const and value in const remains same u cannot modify it 
// we write standard values using const generally it helps in error handling and saves time

// console.log(score);
// console.log(result);
// console.log(PI);



/**
 * Multiple Line comments
*/



//Datatypes

// String
let string = "Text";
console.log("string:",string);
// console.log("string:", typeof string); typeof is used to find the type of variable
// console.log(word.toUpperCase());

// integer
let integer = 13;
console.log("number/ineger:",integer);

// float value
let float = 3.8;
console.log("float value:",float);

// boolean value
let boolean = true;
console.log("Boolean:",boolean);

// null value
let something = null;
console.log(something);

// undefined
let undefined;
console.log("undefined:",undefined);

// Object
const object = {
    class: "Tenth",
    number: 70,
}
console.log("Object:",object);

// array
const array = ["Python","HTML","CSS","JS"]
console.log("array:",array);

// Symbols(ES6)


// BEDMAS
let score = 10;  //Integer
let result = '10'; //String
let finalScore = score + result;
let penalty = score + result;
console.log(finalScore,penalty);

// typeof
console.log(typeof finalScore);
console.log(typeof penalty);

// console.log(let);
// console.log(string);
// console.log(String);

// console.log('hello and good evening'.length)
// console.log("hello".charAt(4));

// Boolean  (true = 1 , false = 0)

// console.log(typeof 1);

// console.log(typeof true);
// console.log(typeof false);

// // console.log(typeof 'five'.isNaN());   // not used
// console.log(typeof isNaN('five'));

//  Truthy Values: any value except 0 and false
// if(1){
//     console.log("Very true!!")
// }else{
//     console.log("Very wrong!!")
// }

// if('hello'){
//     console.log("Very true!!")
// }else{
//     console.log("Very wrong!!")
// }

// Falsy Values: 0 false '' NaN undefined null

// if(0){
//     console.log("Very true!!")
// }else{
//     console.log("Very wrong!!")
// }

// if(''){
//     console.log("Very true!!")
// }else{
//     console.log("Very wrong!!")
// }

// let condition = 10/'hello';  // NaN
// if(cond){
//     console.log("Very true!!")
// }else{
//     console.log("Very wrong!!")
// }

// console.log('hello'.includes('e'));

// Null Undefined

// let score;
// let result = null;

    // if(score){
    //     console.log("Very true!!")
    // }else{
    //     console.log("Very wrong!!")
    // } //very wrong

    // if(result){
    //     console.log("Very true!!")
    // }else{
    //     console.log("Very wrong!!")
    // }  // very wrong

// let score;
// let result = null;
// // let status = null;

//     if(result){
//         console.log("Very true!!")
//     }else{
//         console.log("Very wrong!!")
//     }

// console.log(typeof score);
// console.log(typeof result);