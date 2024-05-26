//Author :- Aditya Yadav
//Implementing a basic object and function inside a object
const student={
    fullName:"aditya yadav",
    marks:93,
    printMarks:function(){
        console.log("Marks obtained is :- ",this.marks);
    }
}

console.log("Name of the Student is :- ",student.fullName); //Accessing the value of the key with the object
student.printMarks(); //Accessing the function define inside the object