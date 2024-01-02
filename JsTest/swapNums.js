function swapNums(num1,num2){
if (num1>num2){
    let temp=num1
    num1=num2
    num2=temp
}
return {num1,num2}
}
let result = swapNums(8,7);
console.log(result);