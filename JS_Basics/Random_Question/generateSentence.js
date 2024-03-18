function generateSentence(desc,arr){
    let str=`The ${arr.length} ${desc} are`
    for(let i=0 ; i<arr.length ; i++){
        str+=" "+arr[i];
    }
    console.log(str);
}

generateSentence("largest countries" , ["China", "India", "USA"]);
