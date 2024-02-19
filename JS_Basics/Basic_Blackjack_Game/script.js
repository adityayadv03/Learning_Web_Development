let player={
    Name: "Adi",
    Chips: 200000
}

let cards=[] //array - ordered list of items

let hasBlackJack=false
let isAlive=false
let isGameStarted=false
let message=""

let sum=0

let messageEL=document.getElementById("message-el")
let sumEL=document.getElementById("sum-el")
// let sumEL=document.querySelector("#sum-el")
let cardsEL=document.getElementById("cards-el")

let playerEL=document.getElementById("player-el")
playerEL.textContent=player.Name+": $"+player.Chips

function startGame(){
    if(isGameStarted===false){
        isGameStarted=true
        isAlive=true
        let firstCard=getRandomCard()
        let secondCard=getRandomCard()
        cards.push(firstCard)
        cards.push(secondCard)
        sum=firstCard+secondCard
        renderGame()
    }
}

function renderGame(){
    // document.getElementById("mess").innerHTML="Game Started"
    cardsEL.textContent="Cards: "
    for(let i=0 ; i<cards.length ; i+=1){
        cardsEL.textContent+=cards[i]+" "
    }
    sumEL.textContent="Sum: "+sum
    if(sum<21){
        message="Do you want to draw a new card?"
        console.log(message)
    }else if(sum===21){
        message="You've got Blackjack"
        console.log(message)
        hasBlackJack=true
    }else{
        message="You're out of the game!"
        console.log(message)
        isAlive=false
    }
    messageEL.textContent=message
}

function newCard(){
    // messageEL.textContent="Drawing a New Card from the deck"

    if(isAlive===true && hasBlackJack===false){
        let card=getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
    }
}

function getRandomCard(){
    let randomNum=Math.floor(Math.random()*13)+1
    if(randomNum===1){
        return 11
    }else if(randomNum>10){
        return 10
    }else{
        return randomNum
    }
}
