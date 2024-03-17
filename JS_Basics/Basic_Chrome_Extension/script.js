
let myLeads=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEL=document.getElementById("ul-el")
const delEL=document.getElementById("delete-btn")
const tabBtn=document.getElementById("tab-btn")

tabBtn.addEventListener("click" , function click(){
    chrome.tabs.query({active:true,currentWindow:true}, function(tabs){
        console.log(tabs)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
})

delEL.addEventListener("dblclick",function clear(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})

function render(leads){
    let listItems=""
    for(let i=0 ; i<leads.length ; i+=1){
        // listItems+="<li><a href='"+myLeads[i]+"' target='_blank'>"+myLeads[i]+"</a></li>"
        listItems+=`
        <li>
            <a href='${leads[i]}' target='_blank'>
                ${leads[i]}
            </a>
        </li>`
    }
    ulEL.innerHTML=listItems
}

inputBtn.addEventListener("click" , function(){
    myLeads.push(inputEl.value)
    inputEl.value=''
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))
})

let lead=[]
lead=JSON.parse(localStorage.getItem("myLeads"))
console.log(lead)
if(lead){
    myLeads=lead
    render(myLeads)
}
