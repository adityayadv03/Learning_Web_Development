//Author :- Aditya Yadav
//Callback Example Implementation
//Callback is the function as a argument to another function
function sum(a,b){ //A normal function performing addition
    console.log(a+b);
}
function calculator(a,b,callbackfunction){ //another function taking another function as parameter
    callbackfunction(a,b); //calling the another function with parameter
}
calculator(1,2,sum); //calling the function calculator and passing sum(a function) as a argument of the first function calculator
