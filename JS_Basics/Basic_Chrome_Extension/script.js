// function saveLead(){
//     console.log("Button Clicked")
// }

let myLeads=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEL=document.getElementById("ul-el")

inputBtn.addEventListener("click" , function(){
    // console.log("Button clicked from addEventListener")
    myLeads.push(inputEl.value)
})

for(let i=0 ; i<myLeads.length ; i+=1){
    ulEL.textContent+=myLeads[i]+" "
}
