const employee={
    calcTax(){
        console.log("Tax rate is 10%");
    }
}
const aditya={
    salary:150000
}
aditya.__proto__=employee;

aditya.calcTax();