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

  
  if (secondHighest === -Infinity) {
    return -Infinity;
  }

  return secondHighest;
}
