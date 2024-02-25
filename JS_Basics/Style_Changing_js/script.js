let col=prompt("Enter Any Color :- ")
let DivEl=document.getElementById("div-el")

function change(){
    DivEl.innerHTML="Color Changed"
    DivEl.style.backgroundColor=col
}

change()