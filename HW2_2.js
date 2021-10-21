// 2. function to check wheter string is blank or not

function blank_check(str) {
    l = str.length;
    if (l === 0) {
        console.log("The string is blank");
    }
    else {
        console.log("The string is not blank");
    }
}
let str2 = "";
blank_check(str2);