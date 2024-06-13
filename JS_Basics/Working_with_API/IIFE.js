//Author :- Aditya Yadav
//IIFE function stand for Immediately Invoked Function Expression means it a function that is called immediately as soon as it defined
//Its is generally used in place where the function has to be called onced and has to be called

(function printHello(){
    console.log("Hello User . ");
})();

(()=>{ //Another Example of using Arrow function in IIFE
    console.log("Hey User");
})();

function get(a){
    console.log("Id :- "+a);
}
(
    async function getId(){
        await get(4);
        console.log("Hey");
        await get(2);
    }
)();