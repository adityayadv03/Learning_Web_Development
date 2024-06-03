// Author :- Aditya Yadav
//Callback Hell Example
//Callback Hell is a problem Creating a difficulty of understanding code block due to callback , it is difficult for the programmer to understand another programmer code block
function getData(dataId,getNextData){ //function which is use to implement the function part 
    setTimeout(()=>{
        console.log("Data :- ",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}

console.log("Getting Data_1 ...");
getData(1,()=>{ //First Function call with arrow function as callback
    console.log("Getting Data_2 ...");
    getData(2,()=>{ //Second Function call with arrow function as callback
        console.log("Getting Data_3 ...");
        getData(3,()=>{ //Third Function call with arrow function as callback
            console.log("Getting Data_4 ...");
            getData(4,()=>{ //Fourth Function call with arrow function as callback
                console.log("Getting Data_5 ...");
                getData(5); //Fifth Function call with arrow function as callback
            });
        });
    });
});
