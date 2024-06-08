//Another Example of Async and await code
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data :- "+dataId);
            resolve("success");
        },2000);
    });
}

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
}

getAllData();