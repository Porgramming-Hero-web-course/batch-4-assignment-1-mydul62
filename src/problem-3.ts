function countWordOccurrences(sentance: string, word: string): number {
  const lower_sentance = sentance.toLowerCase();
  const lower_word = word.toLowerCase();
  const wordsOfSentance = lower_sentance.split(" "); 
  console.log(wordsOfSentance); 
  let i:number;
  let countOccurrence:number=0;;
   for(i=0; i<wordsOfSentance.length; i++){
         if(wordsOfSentance[i]===lower_word){
          countOccurrence+=1;
         }
   } 
  return countOccurrence;
}

console.log(countWordOccurrences("I love typescript", "typescript"));
