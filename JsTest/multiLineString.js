// let multiLinestr = `There
//  are
//  thirty
//  three
//  questions
//  in
//  my
//  test`
// console.log(multiLinestr);

function createMultiLineStr(){
let multiLinestr = `There\n` +
`are\n` +
`thirty\n` +
`three\n` +
`questions\n` +
`in\n` +
`my\n` +
`test\n`;
return multiLinestr
}
 let result = createMultiLineStr("There are thirty three questions in my test");
  console.log(result);