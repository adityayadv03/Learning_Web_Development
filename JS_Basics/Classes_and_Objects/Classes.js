//Author :- Aditya Yadav
//Basic Implementation of Classes in Javascript
class car{ //Creating a class car
    setbrand(brand){ //Creating a function to set the brand of the car
        this.brand=brand;
    }
    start(){ //function having the feature of starting 
        console.log("Starts");
    }
    stop(){ //function having the feature of stoping
        console.log("Stops");
    }
    about(){ //function to print everything about car
        console.log("Car is of Brand :- "+this.brand);
        console.log("Car can :- ");
        this.start();
        this.stop();
    }
}

let thar = new car(); //Creating a object thar of the class car
thar.setbrand("Mahindra"); //setting the brand of the object
thar.about(); //Printing the details of the car with the help of object