//Author :- Aditya Yadav
//Implementing the Promise Chaining In JavaScript
function func1(){ //A Function returning a Promise
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data_1");
            resolve("Success");
        },4000);
    });
};

function fun2(){ //A Function returning a Promise
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data_2");
            resolve("Success");
        },4000);
    });
};

console.log("Fetching Data_1..."); //Console message for fetching the data
func1().then((res)=>{ // then is a inbuilt function helping the programmer to perform any task after the promise is given by any api or function
    console.log("Fetching Data_2 ..."); //After the first promise the second function is called 
    fun2().then((res)=>{});
});