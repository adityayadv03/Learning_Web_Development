function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("Data :- ",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}

console.log("Getting Data_1 ...");
getData(1,()=>{
    console.log("Getting Data_2 ...");
    getData(2,()=>{
        console.log("Getting Data_3 ...");
        getData(3,()=>{
            console.log("Getting Data_4 ...");
            getData(4,()=>{
                console.log("Getting Data_5 ...");
                getData(5);
            })
        })
    })
})