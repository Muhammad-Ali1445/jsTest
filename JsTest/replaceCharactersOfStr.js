function replaceCharactersOfStr(str){
let  tokens=str.split("")
for(let i=0;i<tokens.length-1;i+=2){
 let temp=tokens[i]
 tokens[i]=tokens[i+1]
 tokens[i+1]=temp
}
return tokens.join("")
}
let result = replaceCharactersOfStr("Orange");
console.log(result);


