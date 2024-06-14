//Author :- Aditya Yadav
//IIFE function stand for Immediately Invoked Function Expression means it a function that is called immediately as soon as it defined
//Its is generally used in place where the function has to be called onced and has to be called

(function printHello(){
    console.log("Hello User . ");
})();

(()=>{ //Another Example of using Arrow function in IIFE
    console.log("Hey User");
})();

function get(a){ //Function which will print print the Id for a given input
    console.log("Id :- "+a);
}
( //IIFE Containing a async function just to demostrate the how iife is used in api call in async function
    async function getId(){ //async function
        await get(4); //The code flow will wait till the execution is complete of the function
        console.log("Hey");
        await get(2);
    }
)();