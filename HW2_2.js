// 2. function to check whether string is blank or not

function blank_check(str) {
    let l = str.length;
    let str2 = str.split(' ').join(''); //spaces will be deleted from the string
    let l2 = str2.length;
    if (l != 0 && l2 != 0) {
        console.log("The string is not blank");
    }
    else {
        console.log("The string is blank");
    }
}
let str_check = "    ";
blank_check(str_check);