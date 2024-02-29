//To install the readline-sync you hava to run a command on terminal in the same folder of the current file
//The Command is npm install readline-sync
let object=require("readline-sync") //Created a Object of readline-sync
let num=object.question("Enter Any Number :- ") //Using the Created Object to call a function question() for taling input
console.log("Number Provided :- "+num)