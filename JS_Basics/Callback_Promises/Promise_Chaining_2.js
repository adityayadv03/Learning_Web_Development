//Author :- Aditya Yadav
//Another Way of implementation of promise chaining where the function is return after a completion of previous task
function getData(dataId){ //A Function which is called return a promise
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data :- "+dataId);
            resolve("Success"); //If the work is done the function is calling the resolve with success
        },3000);
    });
};

getData(1).then((res)=>{ //After the first promise the arrow function is executed
    return getData(2); //second time the function is called
}).then((res)=>{ //As the function is called second time is will also return some promise
    return getData(3); //and so on promise chaining take place
}).then((res)=>{
    console.log(res);
})