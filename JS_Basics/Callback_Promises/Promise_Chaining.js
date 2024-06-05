function func1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data_1");
            resolve("Success");
        },4000);
    });
};

function fun2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data_2");
            resolve("Success");
        },4000);
    });
};

console.log("Fetching Data_1...");
func1().then((res)=>{
    console.log("Fetching Data_2 ...");
    fun2().then((res)=>{});
});