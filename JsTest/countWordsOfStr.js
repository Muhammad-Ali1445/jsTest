function countWordsOfStr(str) {
  let tokens = str.split("");
  let count = 0;
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i]) {
      count++;
    }
  }
  return count;
}
let result = countWordsOfStr("AliMunir");
console.log(`Numbers of words In a string ${result}`);
