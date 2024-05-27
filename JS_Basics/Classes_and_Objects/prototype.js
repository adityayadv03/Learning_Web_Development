//Author :- Aditya Yadav
//Basic Implementation of prototype object in Javascript
const employee={ //Creating a object
    calcTax(){ //Another way of creating function inside a object
        console.log("Tax rate is 10%");
    }
}
const aditya={ //Creating another object
    salary:150000
}
aditya.__proto__=employee; //Adding the first object to the prototype of the second object

console.log(aditya.__proto__); //Here the second object have the function calcTax without defining it again in second object

aditya.calcTax(); //Calling the calcTax function with the help of second function