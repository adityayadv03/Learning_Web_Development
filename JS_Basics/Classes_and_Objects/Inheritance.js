//Author :- Aditya Yadav
//Implementing the inheritance in Javascript using the classes
class person{ //Parent Class which is going to be inherit
    eat(){ //Function of the parent class
        console.log("Eat");
    }
    sleep(){
        console.log("Sleep");
    }
    work(){
        console.log("Do Nothing");
    }
}
class student extends person{ //student class inheriting the properties of parent class
    work(){ //Method Overriding as the method is redefine in the derived class
        console.log("Study");
    }
}
class engineer extends person{
    work(){ //Method Overriding as the method is redefine in the derived class
        console.log("Problem Solver and build software . ");
    }
}

let stuobj=new student(); //Creating the object of student class
let engobj=new engineer(); //Creating the object of engineer class

console.log("Student :- ");
stuobj.eat(); //student object able to access the parent class method without defining them again
stuobj.work(); //The method which is redefine will be called , not the method define in the parent class

console.log("Engineer :- ");
engobj.sleep(); //Engineer object able to access the parent class method without defining them again
engobj.work(); //The method which is redefine will be called , not the method define in the parent class