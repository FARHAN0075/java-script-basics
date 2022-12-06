// npm init 
// npm i cowsay 


const Quote = require ("inspirational-quotes");
const a=Quote.getRandomQuote();

console.log(Quote.getRandomQuote()); 

var cowsay = require ("cowsay");


console.log(cowsay.say({
    text : a,
    e : "Zzz",
    T : "ll"
}));