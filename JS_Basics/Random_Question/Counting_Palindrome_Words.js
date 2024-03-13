let object=require("readline-sync");
let str=object.question("Enter Any String :- ");
let arr=str.split(" ");

function palin(word){
    let n=word.length;
    let flag=true;
    for(let i=0 ; i<n/2 ; i++){
        if(word.charAt(i)!=word.charAt(n-i-1)){
            flag=false;
        }
    }
    return flag;
}

let count=0;
for(let i=0 ; i<arr.length ; i++){
    if(palin(arr[i])===true){
        count++;
    }
}
console.log("Number of Palindrome String :- "+count);