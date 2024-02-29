// function saveLead(){
//     console.log("Button Clicked")
// }

let myLeads=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEL=document.getElementById("ul-el")

inputBtn.addEventListener("click" , function(){
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value=''
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

// innerHTML Practice
// let divEL=document.getElementById("container")
// function buy(){
//     divEL.innerHTML+="<p>Thank you for buying!</p>"
// }

// divEL.innerHTML="<button onclick='buy()'>But It!</button>"