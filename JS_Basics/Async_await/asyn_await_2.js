//Author :- Aditya Yadav
//Another Example of Async and await code
function getData(dataId){ //Function which is called during the data fetching
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data :- "+dataId);
            resolve("success");
        },2000);
    });
}

async function getAllData(){ //A Async function necessary for using a await keyword
    await getData(1); //Whenever the await is used the code will wait for the completion of the task and halt all other execution of task
    await getData(2);
    await getData(3);
}

getAllData(); //Function call to execute the all the task define in the function