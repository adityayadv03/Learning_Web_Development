let hasCompletedCourse=true
let givesCertificate=true

if(hasCompletedCourse===true || givesCertificate===false){
    generateCertificate()
}

function generateCertificate(){
    console.log("Generating certificate...")
}


let hasSolvedChallenge=false
let hasHintsleft=false

if(hasSolvedChallenge===false && hasHintsleft===false){
    showSolution()
}

function showSolution(){
    console.log("Showing the solution... ")
}

let likesDocumentaries=false
let likesStartups=true

if(likesDocumentaries===true || likesStartups===true){
    recommendMovie()
}

function recommendMovie(){
    console.log("Hey, check out this new film we think you will like!")
}
