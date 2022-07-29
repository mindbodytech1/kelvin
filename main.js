// kelvin is 293 
const kelvin = 0;
// kelvin minus 273 is celsius
const celsius = kelvin - 273;
// equation to determine farenheit
let fahrenheit = celsius * (9/5) + 32;
// will round decimal place up/down
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
