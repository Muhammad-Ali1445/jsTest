function sumOfnaturalNumbers(arr){
    let sum=0
for(let i=0;i<arr.length;i++){
     sum+=arr[i]
}
return sum
}
let NaturalNumArr=[1,2,3,4,5,6,7,8,9,10]
let result = sumOfnaturalNumbers(NaturalNumArr);
console.log(`The Sum of First Ten Natural Numbers is ${result}`);