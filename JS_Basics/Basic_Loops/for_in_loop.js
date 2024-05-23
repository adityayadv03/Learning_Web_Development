//Author :- Aditya Yadav
//A Basic Program to implement for in loop , This loop help in iterating objects in javascript 

const objects={ //Creating a Object to implement the loop
    a:1,
    b:2,
    c:3
}

console.log("Object Key Value Pair is: ");

for(key in objects){ //Iterating using for in loop
    console.log(`${key}:-${objects[key]}`); //Used Template String for printing string
}