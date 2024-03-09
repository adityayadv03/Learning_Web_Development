let object=require("readline-sync");
let str=object.question("Enter Array Element :- ");
let arr=str.split(" ");
for(let i=0 ; i<arr.length ; i++){
    arr[i]=parseInt(arr[i]);
}
let n=arr.length;
for(let i=0 ; i<n/2 ; i++){
    temp=arr[i];
    arr[i]=arr[n-i-1];
    arr[n-i-1]=temp;
}
console.log("Reversed Arrray :- "+arr);
