//Author :- Aditya Yadav
//Promises in Javascript
function getData(dataId,getNextData){ //Function Returning the Promises for any Work
    return new Promise((resolve,reject)=>{ //The Promise have the parameter as resolve or request which are the function if your works is done we can call resolve function with some value and if the works is not dont we can call the reject function with error message
        setTimeout(()=>{
            console.log("Data :-",dataId);
            resolve("Success"); //The Works is done calling the resolve message , it is necessary to call any function otherwise promise will be in the a pending state 
            if(getNextData){
                getNextData();
            }
        },5000);
    });
};

let pro1 = getData(1,()=>{ //Calling the function and storing the promise return by the function
    console.log(pro1); //Printing the promise status which will be success as we have called the resolve function
    let pro2 = getData(2,()=>{ //Second promises storing
        console.log(pro2); //Printing the promise status which will be success as we have called the resolve function
    });
    console.log(pro2); //The line of code will be executed before the arrow function mention in second promise as it will be show the promise status which will be pending at the starting
});
console.log(pro1); //The line of code will be executed before the arrow function mention in first promise as it will be show the promise status which will be pending at the starting
