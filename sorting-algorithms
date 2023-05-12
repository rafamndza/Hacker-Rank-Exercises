/*Bubble Sort:is an algorithm that sorts an array by comparing two adjacent elements and swapping them if they are not in the intended order.

Time Complexity:O(N2)
*/


const arr = [41,57,47,51,9,52,91,7,105,92];


function bubbleSort(arr){
    for(let i=0; i<arr.length ; i++){
        for(let j=0 ; j<arr.length;j++){
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr);
};

bubbleSort(arr)




/*Insertion Sort:is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. 
The array is virtually split into a sorted and an unsorted part. 
Values from the unsorted part are picked and placed at the correct position in the sorted part.

Time Complexity: O(N^2) 
*/

function insertionSort(arr) { 
    let i, key, j, n=arr.length; 
    for (i = 1; i < n; i++){ 
        key = arr[i]; 
        j = i - 1; 
        while (j >= 0 && arr[j] > key)
        { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = key; 
    } 
    console.log(arr)
} 

insertionSort(arr)

/*
Merge sort :is defined as a sorting algorithm that works by dividing an array into smaller subarrays,
sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.

Time Complexity: O(n log n)
*/


function mergeSort(items) {
    if (items.length < 2) {
      return items;
    }
  
    var middle = Math.floor(items.length / 2),
    left = items.slice(0, middle),
    right = items.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  
  }

  function merge(left, right) {

    var result = [],
    il = 0,
    ir = 0;

    while(il < left.length && ir < right.length) {
  
      if (left[il] < right[ir]) {
        result.push(left[il++]);
  
      } else {
    
        result.push(right[ir++]);
  
      }
  
    }
    return result.concat(left.slice(il)).concat(right.slice(ir));
  }


let arr1=[41,57,47,51,9,52,91,7,105,92,-5]
console.log(mergeSort(arr1))



/*Quick sort: is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot and partitions the given array around 
the picked pivot by placing the pivot in its correct position in the sorted array. 

Time Complexity: O(N2)
*/
let ar = [5,-1,4,2,1,-7,0,-14,14]

function quickSort(ar){
    if(ar.length==0){return []}
    let mid = Math.floor(ar.length/2),
    pivot = ar[mid], left=[], right=[];
    for(let i =0;i<ar.length;i++){
        if (-i!=mid){
            if(ar[i]>pivot){
                right.push(ar[i])
            }else{
                left.push(ar[i])
            }
        }

    }
    left = quickSort(left)
    right = quickSort(right)
    return left.concat(pivot).concat(right)
}
console.log(quickSort(ar))
