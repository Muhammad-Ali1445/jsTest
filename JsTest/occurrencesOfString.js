function occurrencesOfString(str){
let occurObj={}
let tokens=str.split("")
for(let i=0;i<tokens.length;i++){
    let char=tokens[i]
    if(occurObj[char]==undefined){
        occurObj[char]=1
    }
    else{
        occurObj[char]++
    }
}
return occurObj
}
let result = occurrencesOfString("rooH");
console.log(result);


