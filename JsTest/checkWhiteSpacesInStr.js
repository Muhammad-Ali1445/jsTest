// // cont white spaces in a given string
// function checkWhiteSpacesInStr(str){
// let tokens=str.split("")
// let count=0
// for(let i=0;i<tokens.length;i++){
// let char=tokens[i]
// if(char === ' '){
//     count++
// }

//     }
//     return count
// }
// let result = checkWhiteSpacesInStr("ali munir !");
// console.log(result);

// check white spaces in the given string
function checkWhiteSpacesInStr(str) {
  let tokens = str.split("");
  for (let i = 0; i < tokens.length; i++) {
    let char = tokens[i];
    if (char === " ") {
      return "String contains white spaces";
    }
  }
  return "No white spaces in the string";
}

let result = checkWhiteSpacesInStr("ali munir !");
console.log(result);
