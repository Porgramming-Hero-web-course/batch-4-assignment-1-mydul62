{
// 
function removeDuplicates(array: number[]): number[] {
  const newArray: number[] = [];

  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(result);

// 
}