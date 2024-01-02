function trimStrFromBeginingAndEnding(str){
let lastindex=str.length-1

let resultantStr=str.substring(1,lastindex)
return resultantStr

}
let result = trimStrFromBeginingAndEnding("aalimunir!");
console.log(result);