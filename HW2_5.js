//5. function with conditional statement to sort 3 numbers

function sort(a, b, c) {
    let x1;
    let x2;
    let x3;
    if (a > b && a > c) {
        x3 = a;
        if (b > c) {
            x2 = b;
            x1 = c;
        }
        else {
            x2 = c;
            x1 = b;
        }
    }
    else if (a > b || a > c) {
        x2 = a;
        if (b > c) {
            x3 = b;
            x1 = c;
        }
        else {
            x3 = c;
            x1 = b;
        }
    }
    else {
        x1 = a;
        if (b > c) {
            x3 = b;
            x2 = c;
        }
    }   
    console.log(`${x1} ${x2} ${x3}`);
}
let num1 = 1;
let num2 = 7;
let num3 = 4;
sort(num1, num2, num3);