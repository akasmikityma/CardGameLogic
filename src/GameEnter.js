import { Cards2 } from "./GameMechanincs.js";

//how do i shuffle them >>
//Fisher Yates shuffle ==> so start the iteraion from the end and the have a variable that is populated a random number between 0 to i-1 and in every iteration they both are swapped positionally >>>>
const flatten_Cards=Cards2.flat();

const shuffleTheCards=(flatten_Cards)=>{
    const n=flatten_Cards.length;
    for(let i=n-1;i>0;i--){
        let index=CreateRandom(0,i);
        //swap these numbers

        let temp=flatten_Cards[i];
        flatten_Cards[i]=flatten_Cards[index];
        flatten_Cards[index]=temp
    }
    return flatten_Cards;
}

const DisttributingCards=(players,The_Array)=>{
    if (players < 1 || players > 5) {
        throw new Error("Number of players must be between 1 and 5");
    }
    // Create an array of arrays for players
    const shuffled=shuffleTheCards(The_Array)
    const playerArrays = Array.from({ length: players }, () => []);
    // console.log(playerArrays)
    
    let index = 0;
    while (true) {
        // Distribute the current element to the current player
        playerArrays[index % players].push(shuffled.shift());
        
        // Check if all player arrays have at least 8 elements
        if (playerArrays.every(arr => arr.length >= 8)) {
            break;
        }

        // Move to the next element
        index++;
    }

    // The remaining elements
    const remainingElements = shuffled;

    return { ...playerArrays, remainingElements };
}
const CreateRandom=(start,end)=>{
    const ans= Math.floor(Math.random()*end)
    return ans
}
const sequence=['A',2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
const getJockey=(restElements)=>{
    //how do i know that k is after q 
    const last_obj=restElements[restElements.length-1];
    console.log(last_obj)
    for(let i=0;i<sequence.length;i++){
        if(last_obj.card===sequence[i]){
            return sequence[i+1];
        }
    }
    return last_obj;
}

const remainingCardsAfterShuffle=DisttributingCards(5,flatten_Cards).remainingElements;
console.log(getJockey(remainingCardsAfterShuffle))
// console.log(remainingCardsAfterShuffle) 