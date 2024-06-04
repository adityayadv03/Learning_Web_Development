function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data :-",dataId);
            resolve("Success");
            if(getNextData){
                getNextData();
            }
        },5000);
    });
};

let pro1 = getData(1,()=>{
    console.log(pro1);
    let pro2 = getData(2,()=>{
        console.log(pro2);
    });
    console.log(pro2);
});
console.log(pro1);