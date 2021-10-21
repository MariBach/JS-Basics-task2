//1. function to check if given string include given symbol

function symbol_check(symbol, str) {
    if (str.indexOf(symbol) != -1) {
        return true; 
    }
    else {
        return false; 
    }
}
let symbol1 = "x";
let str1 = "task number 1";
    console.log(symbol_check(symbol1, str1));