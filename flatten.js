function flatten(arr) {
    if(!arr.length) {
        return arr;
    }
    if(!arr[0].length) {
        return [arr[0]].concat(flatten(arr.slice(1)))
    } else {
        return flatten(arr[0]).concat(flatten(arr.slice(1)))
    }
}

//Test flatten
console.log(flatten(1));
console.log(flatten([1]));
console.log(flatten([[1], [2]]));
console.log(flatten([1, [[2]], [3]]));

var data = [0, [1], [2,3], [[[4, [[[5]]]]]], [[[[6]]]] ];
console.log(flatten(data));
