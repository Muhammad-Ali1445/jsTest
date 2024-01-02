function deletecharFromStartOfString(str){
let char=str.length-1
    let resultantString=str.substring(1,char)
    return resultantString
}
let result = deletecharFromStartOfString("rooH");
console.log(`Delete a charcter From the start of String ${result}`);