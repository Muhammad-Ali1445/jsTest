function occurrencesOfString(str) {
    let occurObj = {};
    const uniqueChars = [];
    let tokens = str.split("");
    for (let i = 0; i < tokens.length; i++) {
      let char = tokens[i];
      if (occurObj[char] == undefined) {
        occurObj[char] = 1;
      } else {
        occurObj[char]++;
      }
    }
    for (const char in occurObj) {
      if (occurObj[char] === 1) {
        uniqueChars.push(char);
      }
    }
  
    return uniqueChars;
  }
  let result = occurrencesOfString("farhaan");
  console.log(result);