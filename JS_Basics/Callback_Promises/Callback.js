function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,callbackfunction){
    callbackfunction(a,b);
}
calculator(1,2,sum);