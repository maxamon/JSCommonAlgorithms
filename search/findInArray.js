var time1 = new Date().getTime();

function isIn1(arr, X) {  //Оценка сложности O(C)
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === X) {
            return true
        }
    }
    return false
}
function isIn2(arr, X) {  //Оценка сложности O(log(n))
    if(arr.length > 1) {
        var index = Math.floor(arr.length/2),
            middle = arr[index];
    
        if(X == middle) {
            return true
        }
        if(X < middle) {
            return isIn2(arr.slice(0, index), X)
        } else {
            return isIn2(arr.slice(index + 1), X)
        }
    }
    return false
}

function isIn3(arr, X) {  //Оценка сложности O(log(n))
    function helper(start, stop) {
      if(start <= stop) {
          var index = start + Math.floor((stop - start)/2),
              middle = arr[index];
      
          if(X == middle) {
              return true
          }
          if(X < middle) {
              return helper(start, index)
          } else {
              return helper((index + 1), stop)
          }
      }
      return false
    }
    return helper(0, arr.length - 1)
}

//Test
function generate() {
    var arr = [];
    for(var i = 0; i < 1000000; i++) {
        arr.push(i);
    }
    return arr;
}

var arr = generate();
var searchValue = arr.length-1
  
var time2 = new Date().getTime();
console.log("generate: "+(time2 - time1))

//var arr = [1,2,4,5,7,9,10,13,18];
console.log(isIn1(arr, searchValue)); //True
var time3 = new Date().getTime();
console.log("isIn1: "+(time3 - time2))

console.log(isIn2(arr, searchValue)); //
var time4 = new Date().getTime();
console.log("isIn2: "+(time4 - time3))

console.log(isIn3(arr, searchValue)); //
var time5 = new Date().getTime();
console.log("isIn3: "+(time5 - time4))
