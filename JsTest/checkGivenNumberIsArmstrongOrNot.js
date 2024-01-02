function IsArmStrongNumber(number) {
  let numString = number.toString();
  let numDigits = numString.length;
  let sum = 0;
  for (let i = 0; i < numDigits; i++) {
    let digit = parseInt(numString[i]);
    sum += Math.pow(digit, numDigits);
  }
  if (sum === number) {
    return "number is ArmStrong";
  } else {
    return "Not a ArmStrong number";
  }
}
let result = IsArmStrongNumber(749);
console.log(result);


