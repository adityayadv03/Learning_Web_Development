const obj=require('readline-sync');
let string=obj.question("Enter Any String :- ");
for(let ch of string){
    console.log("Character :- ",ch);
}