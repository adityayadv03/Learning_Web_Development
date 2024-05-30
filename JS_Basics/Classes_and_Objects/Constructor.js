//Author :- Aditya Yadav
//Implementing Constructor in Classes in Javascript
class person{ //Creating a class person
    constructor(name,age){ //the constructor of the class which will automatically invoke when any object is created of the class
        this.name=name;
        this.age=age;
    }
    about(){ //A function which print the details about that person
        console.log("Hey I am :- "+this.name+" and i am "+this.age+" years old ."); 
    }
}

let ama = new person("Aman",23); //Creating the object
let riy = new person("Riya",21); //Creating the object

ama.about(); //Calling the function with the created object
riy.about(); //Calling the function with the created object