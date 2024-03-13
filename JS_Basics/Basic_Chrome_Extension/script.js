
let myLeads=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEL=document.getElementById("ul-el")
const delEL=document.getElementById("delete-btn")

delEL.addEventListener("dblclick",function clear(){
    localStorage.clear()
    myLeads=[]
    renderLeads()
})

function renderLeads(){
    let listItems=""
    for(let i=0 ; i<myLeads.length ; i+=1){
        // listItems+="<li><a href='"+myLeads[i]+"' target='_blank'>"+myLeads[i]+"</a></li>"
        listItems+=`
        <li>
            <a href='${myLeads[i]}' target='_blank'>
                ${myLeads[i]}
            </a>
        </li>`
    }
    ulEL.innerHTML=listItems
}

inputBtn.addEventListener("click" , function(){
    myLeads.push(inputEl.value)
    inputEl.value=''
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads()
    console.log(localStorage.getItem("myLeads"))
})

const lead=[]
lead=JSON.parse(localStorage.getItem("myLeads"))
console.log(lead)
if(lead){
    myLeads=lead
    renderLeads()
}
