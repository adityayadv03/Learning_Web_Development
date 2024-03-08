// Author :- Aditya Yadav
let object=require("readline-sync");
let str=object.question("Enter Any String :- ");
str=str.trim();

function reverse(str){
    let newstr="";
    let ch;
    for(let i=0 ; i<str.length ; i++){
        ch=str.charAt(i);
        newstr=ch+newstr;
    }
    return newstr;
}
console.log("Reverse String :- "+reverse(str));
