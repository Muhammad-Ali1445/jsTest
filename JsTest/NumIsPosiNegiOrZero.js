function NumIsPosiNegiOrZero(num){
if (num>0){
    return "Positive Number"
}
else if (num==0){
    return "Number is Equal to Zero"
}
else{
    return "number is Negative"
}
}
let result = NumIsPosiNegiOrZero(0);
console.log(result);