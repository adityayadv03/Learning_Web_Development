//Author :- Aditya Yadav
//A basic Program implementing for of loop in javascript
const obj=require('readline-sync'); //Taking input from the terminal using readline-sync module of node js
let string=obj.question("Enter Any String :- "); //Taking input with the help of question function of the module
for(let ch of string){ //Iterating with the help of for of loop
    console.log("Character :- ",ch); //Printing each character in new line
}