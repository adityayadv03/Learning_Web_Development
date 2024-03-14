let numEL1=document.getElementById("num1");
let numEL2=document.getElementById("num2");
let paraEL=document.getElementById("ans");
let butEL=document.getElementById("but");
butEL.addEventListener("click",function Add(){
    let num=parseInt(numEL1.value)+parseInt(numEL2.value);
    paraEL.innerHTML="Answer :- "+num;
})