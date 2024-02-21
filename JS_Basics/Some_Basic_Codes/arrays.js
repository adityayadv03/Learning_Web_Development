//Introduction to arrays
//Arrays - ordered lists of items

let featuredPosts = [
    "Chech out my Netflix Clone" , 
    "Here's the code for my projects" , 
    "I've just relaunched my portfolio"
]

console.log(featuredPosts.length)

let exp=["Student at UPES" , "A Programmer" , "Learning Frontend Development"]
let experience=["CEO at Scrimba" , "Frontend Developer at Xeneta" , "People counter for Norstat"]

console.log(experience[1])
console.log(experience[2])
console.log(experience[0])


// Arrays - ordered lists of items - composite / complex data types

let person=["Aditya Yadav",19,true]
console.log(person)

let cards=[7,4]
cards.push(6)
console.log(cards)

let message=[
    "Hey, how's it going",
    "I am Great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]
let newMessage="Same here!"
message.push(newMessage)
console.log(message)
message.pop()
console.log(message)