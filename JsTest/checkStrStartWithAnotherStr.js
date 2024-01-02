
function checkStrStartWithAnotherStr(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
  
    for (let i = 0; i < str2.length; i++) {
      if (str1[i] !== str2[i]) {
        return "No str2 does not start from str1";
      }
    }
    return "Yes str2 starts from str1";
  }
  
  let result = checkStrStartWithAnotherStr("usama", "UsA");
  console.log(result);
  