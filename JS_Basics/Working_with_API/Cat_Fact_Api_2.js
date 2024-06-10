//Author :- Aditya Yadav
//Getting Data from a api using it url and fetch function of javascript
//Approach 2 of getting data from the api using then function
const URL="https://cat-fact.herokuapp.com/facts" //This is the base url of api which give us a response while visiting the base url
//Storing the base url in the URL Variable
function getFacts(){
    fetch(URL).then((response)=>{ //Using the fetch function which return a promise and after the promise is resolve then the function will execute
        return response.json(); //returning the response in json format
    }).then((data)=>{ //as the then function is used it also return another promise object which is handle by another then function
        console.log(data); //Then function will print the data and one fact from the json object
        console.log("Fact :- "+data[3].text);
    })
}
getFacts(); //Calling the function