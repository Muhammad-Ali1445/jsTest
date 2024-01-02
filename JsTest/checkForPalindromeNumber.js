// check for Palindrome String
function checkForPalindromeStr(str) {
  let reversedStr = "";

  for (var i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  if (str === reversedStr) {
    return "Given string is palindrome";
  }

  return "Given string is not a palindrome";
}

let result1 = checkForPalindromeStr("rotor");
console.log(result1);

// check for palindrome Number

function checkForPalindromeNumber(num2) {
  num2 = num2.toString();
  let num1 = 12321;
  let reversedStr = "";
  for (let i = num2.length - 1; i >= 0; i--) {
    reversedStr += num2[i];
  }
  if (num1 == parseInt(reversedStr)) {
    return "Given number is palindrome";
  }

  return "Given number is not a palindrome";
}
let result = checkForPalindromeNumber(12471);
console.log(result);
