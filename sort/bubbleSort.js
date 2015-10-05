function bubbleSort()
{
   var arr = [6,5,4,3,2,2,1,0],
       wasSwaped = false;
   
   do {
       wasSwaped = false;
       for (var i = 0; i < arr.length-1; i++) {
           if(arr[i] > arr[i+1]) {
               swap(arr, i, i+1)
               wasSwaped = true;
           }
       }
   } while (wasSwaped)
   
   console.log(arr)
}

function swap(arr, left, right) {
    var t = arr[left];
    arr[left] = arr[right];
    arr[right] = t;
}

bubbleSort();
