/*

Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
She tabulates the number of times she breaks her season record for most points and least points in a game. 
Points scored in the first game establish her record for the season, and she begins counting from there.

*/


function breakingRecords(...scores){

  let highScore=0, lowScore= 0, high = scores[0], low=scores[0];

    scores.forEach((score) => {

        if (score < low){
           low = score 
           lowScore++
        }else if(score >high ){
            high=score
            highScore++
        }
        else{

        }
    })
    return [highScore,lowScore]
}

console.log(breakingRecords(10,5,20,20,4,5,2,25,1))