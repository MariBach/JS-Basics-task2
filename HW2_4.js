//4. function to accept 2 integers and display the largest

function largest_num(num1, num2) {
    let x;
    if (num1 > num2) {
        x = num1;
    }
    else if (num2 > num1) {
        x = num2;
    }
    else {
        x = 'numbers are equal';
    }
    console.log(x);
}
let a = 15;
let b = 25;
largest_num(a,b);