//Author :- Aditya Yadav
//Example of async and await keyword in Javascript
//async and await are the two keyword used  understand tha complex code of promise chaining and callback hell with only two keyword
function api(){ //Function which is called 
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather Data . ");
            resolve(200);
        },2000);
    });
};

async function getWeatherData(){ //A Async function necessary for using a await keyword
    await api(); //Whenever the await is used the code will wait for the completion of the task and halt all other execution of task
    await api();
}
getWeatherData();