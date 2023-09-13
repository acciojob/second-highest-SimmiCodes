function secondHighest(arr) {
  
  if (arr.length <= 1) {
    return -Infinity;
  }

  let highest = -Infinity;
  let secondHighest = -Infinity;

  for (const num of arr) {
    if (num > highest) {
      secondHighest = highest;
      highest = num;
    } else if (num > secondHighest && num < highest) {
      secondHighest = num;
    }
  }

  // If highest and secondHighest are the same, it means all elements in the array are the same
  if (highest === secondHighest) {
    return -Infinity;
  }
}