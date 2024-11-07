function countWordOccurrences(sentance: string, word: string): number {
  const lower_sentance = sentance.toLowerCase();
  const lower_word = word.toLowerCase();
  const wordsOfSentance = lower_sentance.split(/\W+/).filter(Boolean); 
  console.log(wordsOfSentance); 
  let i:number;
  let countOccurrence:number=0;;
   for(i=0; i<wordsOfSentance.length; i++){
         if(wordsOfSentance[i]===lower_word){
          countOccurrence+=1;
         }
   }
 console.log(countOccurrence)
 
  return countOccurrence;
}

console.log(countWordOccurrences("TypeScript is great. I love TypeScript!  TypeScript!", "typescript"));
