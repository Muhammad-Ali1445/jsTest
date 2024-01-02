function CelsiusToFehrenheit(celsius){
let fehren= celsius * (9/5) + 32
return fehren
}
let result = CelsiusToFehrenheit(9);
console.log(`Fehrenheit result is ${result}`);