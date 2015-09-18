function isIn1(arr, X) {  //Оценка сложности O(n)
    return arr.indexOf(X) !== -1
}
function isIn2(arr, X) {  //Оценка сложности O(log(n))
    console.log(arr)
    if(X == arr[arr.length-1]) {
        return true
    }
    if(X < arr[arr.length-1] && arr.length > 1) {
        return isIn2(arr.slice(Math.floor(arr.length/2)), X) || isIn2(arr.slice(0, Math.floor(arr.length/2)), X)
    }
    return false
}

//Test
var arr = [1,2,4,5,7,9,10,13,18];
console.log(isIn1(arr, 7)); //True
console.log(isIn2(arr, 8)); //False
