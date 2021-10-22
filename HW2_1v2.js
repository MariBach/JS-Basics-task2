//1. function to check if given string includes given symbol
function symbol_check(symbol, str) {
    return str.includes(symbol);
}
symbol1 = 'a'
str1 = 'task number 1 variant 2'
console.log(symbol_check(symbol1, str1));