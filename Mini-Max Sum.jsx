/*Given five positive integers, find the minimum and maximum values that can be calculated by 
summing exactly four of the five integers. Then print the respective minimum and maximum values
 as a single line of two space-separated long integers. */

function miniMaxSum(arr) {
    let minSum = Infinity;
    let maxSum = -Infinity;
    let totalSum = 0;

    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
    };

  // Iterate through all possible combinations of 4 integers
  for (let i = 0; i < arr.length; i++) {
    let sumWithoutCurrent = totalSum - arr[i];
    
    if (sumWithoutCurrent < minSum) {
      minSum = sumWithoutCurrent;
    }
    
    if (sumWithoutCurrent > maxSum){
      maxSum = sumWithoutCurrent;
    }
  }
    console.log(minSum,maxSum);
    

}

miniMaxSumS(1,2,3,4,5)