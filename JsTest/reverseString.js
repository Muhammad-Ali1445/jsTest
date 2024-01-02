function reverseString(str){
    let reversedStr="";
    // let tokens=str.split("")
    for(let i=str.length-1;i>=0;i--){
        reversedStr+=str[i]
    }
    return reversedStr
}
let result = reverseString("rooH");
console.log(`Reversed String ${result}`);