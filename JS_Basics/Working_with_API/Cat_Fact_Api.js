//Author :- Aditya Yadav
//Getting Data from a api using it url and fetch function of javascript
const URL="https://cat-fact.herokuapp.com/facts" //This is the base url of api which give us a response while visiting the base url
//Storing the base url in the URL Variable
const getFacts=async()=>{ //Creating a asynchronous arrow function and storing it in a variable getFacts
    console.log("getting data...");
    let response=await fetch(URL); //Getting the response of from the base url and using await as other work can be done without the reponse
    console.log(response); //Printing the response
    let data=await response.json(); //Converting the response into a javascript object notation
    console.log(data); //Printing the data
    console.log(data[1].text);//Printing the cat fact from the javascirpt object
}
getFacts(); //Calling the arrow function