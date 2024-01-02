function formatNumbersAsCurrencystr(number){
let formattor='$' + number.toFixed()
return formattor

}
let result = formatNumbersAsCurrencystr(1280);
console.log(result)