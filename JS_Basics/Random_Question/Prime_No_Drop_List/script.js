let dropEL=document.getElementById("drop-el")
console.log(dropEL)
function add_In(value){
    dropEL.innerHTML+="<option>"+value+"</option>"
}

const butEL=document.querySelector("#submit")
// butEL.addEventListener('click',()=>{
//     butEL.classList.add("special")
// })

function isPrime(val){
    let flag=true
    if(val<2){
        flag=false
    }else{
        for(let i=2 ; i<=val/2 ; i++){
            if(val%i==0){
                flag=false
            }
        }
    }
    return flag
}

function cal(){
    let low=document.getElementById("lower").value
    let high=document.getElementById("higher").value
    while(low<=high){
        if(isPrime(low)==true){
            add_In(low)
            console.log(low)
        }
        low++
    }
    butEL.disabled=true
}

