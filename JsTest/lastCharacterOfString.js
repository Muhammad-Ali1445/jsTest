// function lastCharacterOfStr(str){
// let tokens=str.split("")
// let lastChar
// for(let i=0;i<tokens.length;i++){
//      lastChar=tokens[str.length-1]
// }
// return lastChar
// }
// let result = lastCharacterOfStr("");
// console.log(`The last Character of string is ${result}`);


function lastCharacterOfStr(str){
    let tokens=str.split("")
    let lastChar=tokens[str.length-1]
    return lastChar
    }
    let result = lastCharacterOfStr("rooH");
    console.log(`The last Character of string is ${result}`);
