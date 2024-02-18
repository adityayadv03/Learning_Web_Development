let num1=8
let num2=2

document.getElementById("el_1").innerText=num1
document.getElementById("el_2").innerText=num2

function add(){
    let ans=num1+num2
    document.getElementById("answer").innerHTML="Answer :- "+ans
}

function sub(){
    let ans=num1-num2
    document.getElementById("answer").innerHTML="Answer :- "+ans
}

function mul(){
    let ans=num1*num2
    document.getElementById("answer").innerHTML="Answer :- "+ans
}

function div(){
    let ans=num1/num2
    document.getElementById("answer").innerHTML="Answer :- "+ans
}