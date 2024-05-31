//Author :- Aditya Yadav
//Implementing the use of super keyword in classes constructor
//Super keyword is use to call the constructor of the parent class
class person{
    constructor(name){
        this.species="Homosapiens";
        this.name=name;
    }
    about(){
        console.log("Hey I am Aditya . ");
    }
}
class engineer extends person{
    constructor(name){
        super(name);
    }
    work(){
        super.about();
        console.log("and I am Engineer and I am a Problem Solver and build Software ");
    }
}

let engobj=new engineer("aditya");
engobj.work();