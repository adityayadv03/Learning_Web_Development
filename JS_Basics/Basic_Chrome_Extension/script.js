// function saveLead(){
//     console.log("Button Clicked")
// }

let myLeads=["www.abc.com","www.def.com","www.ghi.com"]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEL=document.getElementById("ul-el")

inputBtn.addEventListener("click" , function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

let listItems=""
for(let i=0 ; i<myLeads.length ; i+=1){
    listItems+="<li>"+myLeads[i]+"</li>"
}
ulEL.innerHTML=listItems

// innerHTML Practice
// let divEL=document.getElementById("container")
// function buy(){
//     divEL.innerHTML+="<p>Thank you for buying!</p>"
// }

// divEL.innerHTML="<button onclick='buy()'>But It!</button>"