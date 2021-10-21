//5. function with conditional statement to sort 3 numbers (numbers are in array)

let arr = [1, 7, 4];
function doSort(arr) {
    arr.sort((a,b) => a - b);
    return(arr);
}
console.log(doSort(arr));