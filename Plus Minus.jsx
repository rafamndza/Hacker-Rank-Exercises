/*Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
Print the decimal value of each fraction on a new line with  places after the decimal. */


function plusMinus(arr) {
    let positive=0 , negative=0, zero=0;
    arr.forEach(number=>{
        if (number > 0) positive++;
        else if (number < 0) negative++ ;
        else zero++;
    })
 
 console.log((positive/arr.length).toFixed(6));
 console.log((negative/arr.length).toFixed(6));
 console.log((zero/arr.length).toFixed(6));
}

plusMinus([6,-3,10,1,0,-5])
