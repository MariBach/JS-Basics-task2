//1. function to check if given string includes given symbol

function symbol_check(symbol, str) {
    if (str.indexOf(symbol) != -1) {
        return true;  //function returns 'true' if the symbol is included in the string
    }
    else {
        return false; //function returns 'false' if the string doesn't include the symbol
    }
}
let symbol1 = "a";
let str1 = "task number 1";
console.log(symbol_check(symbol1, str1));