//your JS code here. If required.
function secondHighest(arr) {
  
  if (arr.length <= 1) {
    return -Infinity;
  }
const uniqueArr = [...new Set(arr)];

 
  uniqueArr.sort((a, b) => b - a);

  
  if (uniqueArr.length < 2) {
    return -Infinity;
  }

  
  return uniqueArr[1];
}
